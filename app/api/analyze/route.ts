import { analyzeResume, GROQ_MODEL } from "@/lib/ai/analyze";
import { analyzeResumeWithGemini, GEMINI_MODEL } from "@/lib/ai/geminiAnalyze";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  classifyError,
  getProviderStatusCode,
  type ErrorType,
} from "@/lib/ai/classifyError";
import { NextRequest, NextResponse } from "next/server";

async function logFailureSafely({
  userId,
  modelAttempted,
  error,
  errorType,
}: {
  userId: string;
  modelAttempted: string | null;
  error: unknown;
  errorType?: ErrorType;
}): Promise<void> {
  try {
    const admin = createAdminClient();

    const { error: insertError } = await admin
      .from("analysis_failures")
      .insert({
        user_id: userId,
        error_type: errorType ?? classifyError(error),
        model_attempted: modelAttempted,
        status_code:
          modelAttempted === null ? null : getProviderStatusCode(error),
      });

    if (insertError) {
      console.error("Failed to record analysis failure.");
    }
  } catch {
    // Logging must never replace the original analysis response.
    console.error("Failure logging was unavailable.");
  }
}

export async function POST(request: NextRequest) {
  let userId: string | null = null;
  let shouldLogUnexpectedError = false;

  try {
    // Verify identity from the server-side session.
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: "Analysis failed. Please try again." },
        { status: 401 },
      );
    }

    userId = user.id;

    const { resumeText, jobDescription } = await request.json();

    if (
      typeof resumeText !== "string" ||
      !resumeText.trim() ||
      typeof jobDescription !== "string" ||
      !jobDescription.trim()
    ) {
      return NextResponse.json(
        { error: "Resume and job description are required." },
        { status: 400 },
      );
    }

    // From here onward, unexpected application errors should be recorded.
    shouldLogUnexpectedError = true;

    // Attempt the primary provider first.
    try {
      const result = await analyzeResume(resumeText, jobDescription);

      return NextResponse.json({
        ...result,
        model: GROQ_MODEL,
      });
    } catch {
      console.warn("Primary AI failed; attempting Gemini fallback.");
    }

    // Attempt the fallback provider.
    try {
      const result = await analyzeResumeWithGemini(resumeText, jobDescription);

      return NextResponse.json({
        ...result,
        model: GEMINI_MODEL,
      });
    } catch (geminiError) {
      // Log once, after both providers have failed.
      await logFailureSafely({
        userId,
        modelAttempted: GEMINI_MODEL,
        error: geminiError,
      });

      // Prevent the outer catch from recording a duplicate.
      shouldLogUnexpectedError = false;

      return NextResponse.json(
        { error: "Analysis failed. Please try again." },
        { status: 500 },
      );
    }
  } catch (error) {
    if (userId && shouldLogUnexpectedError) {
      await logFailureSafely({
        userId,
        modelAttempted: null,
        error,
        errorType: "other",
      });
    }

    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 },
    );
  }
}
