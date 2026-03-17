import { analyzeResume } from '@/lib/ai/analyze';
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

    const result = await analyzeResume(resumeText, jobDescription);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: 'Analysis failed. Please try again.' },
      { status: 500 }
    );
  }
}
