import { analyzeResume, GROQ_MODEL } from "@/lib/ai/analyze";
import { analyzeResumeWithGemini, GEMINI_MODEL } from "@/lib/ai/geminiAnalyze";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";

type ErrorType = "capacity_or_rate_limit" | "other";

function getProviderStatusCode(error: unknown): number | null {
  if (typeof error !== "object" || error === null) return null;

  const value = error as { status?: unknown; statusCode?: unknown };
  const status = value.status ?? value.statusCode;

  return typeof status === "number" && status >= 100 && status <= 599
    ? status
    : null;
}

function classifyError(error: unknown): ErrorType {
  const statusCode = getProviderStatusCode(error);

  let message = "";

  if (typeof error === "object" && error !== null && "message" in error) {
    const value = (error as { message?: unknown }).message;

    if (typeof value === "string") {
      message = value;
    }
  }

  if (
    (statusCode !== null && [429, 503, 529].includes(statusCode)) ||
    /rate.?limit|too many requests|quota|resource exhausted|overloaded|capacity|temporarily unavailable/i.test(
      message,
    )
  ) {
    return "capacity_or_rate_limit";
  }

  return "other";
}

async function logFailureSafely({
  userId,
  modelAttempted,
  error,
}: {
  userId: string;
  modelAttempted: string;
  error: unknown;
}): Promise<void> {
  try {
    const admin = createAdminClient();

    const { error: insertError } = await admin
      .from("analysis_failures")
      .insert({
        user_id: userId,
        error_type: classifyError(error),
        model_attempted: modelAttempted,
        status_code: getProviderStatusCode(error),
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
      // Log only the final failure, attributed to the last provider attempted.
      await logFailureSafely({
        userId,
        modelAttempted: GEMINI_MODEL,
        error: geminiError,
      });

      return NextResponse.json(
        { error: "Analysis failed. Please try again." },
        { status: 500 },
      );
    }
  } catch {
    // Unexpected route errors are not counted as AI provider failures.
    return NextResponse.json(
      { error: "Analysis failed. Please try again." },
      { status: 500 },
    );
  }
}
