import { analyzeResume } from '@/lib/ai/analyze';
import { analyzeResumeWithGemini } from '@/lib/ai/geminiAnalyze';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { resumeText, jobDescription } = await request.json();

    if (!resumeText || !jobDescription) {
      return NextResponse.json(
        { error: 'Resume and job description are required.' },
        { status: 400 }
      );
    }

    let result;
    try {
      // Try the primary model first
      result = await analyzeResume(resumeText, jobDescription);
    } catch (err) {
      console.warn('Primary AI failed, falling back to Gemini:', err);
      // Fallback to Gemini
      result = await analyzeResumeWithGemini(resumeText, jobDescription);
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Analysis failed. Please try again.' },
      { status: 500 }
    );
  }
}
