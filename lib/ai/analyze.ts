import { AnalysisResult } from '@/types';
import Groq from 'groq-sdk';

// Initialize Groq with your API Key
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function analyzeResume(
  resumeText: string,
  jobDescription: string
): Promise<AnalysisResult> {
  const systemInstructions = `
You are an expert resume analyst and career coach.

Your goal is to provide HIGH-QUALITY, HUMAN-LIKE, and INSIGHTFUL analysis.

STYLE GUIDELINES:
- Write in a natural, professional, slightly conversational tone.
- Avoid robotic or overly polished "AI-sounding" phrases.
- Vary sentence structure to feel human.
- Avoid repeating patterns like "I am excited..." too often.
- Make the writing feel like it was written by a real candidate, not AI.

COVER LETTER RULES:
- Write a strong, professional 3-paragraph cover letter.
- MUST include proper paragraph breaks using "\\n\\n".
- Keep tone confident but not exaggerated or overly formal.
- Make it feel personal and realistic, not templated.

Structure:
Opening line → ALWAYS start with "Dear Hiring Manager," on its own line followed by "\\n\\n"
1st paragraph → natural introduction + role (avoid clichés)
2nd paragraph → skills/projects (mention at least one real project if possible, explain impact briefly)
3rd paragraph → genuine interest + forward-looking closing (not generic)

CRITICAL ENDING RULE:
- After the 3rd paragraph, you MUST append exactly:
"\\n\\nRegards,\\n[Your Name]"
- Do NOT replace [Your Name]
- Do NOT omit this line
- Do NOT add anything after it

OUTPUT RULES:
- Return ONLY valid JSON.
- No markdown, no explanations.
- Keep responses detailed but clean.
`;

  const userPrompt = `
Analyze the following Resume against the Job Description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return a JSON object with this exact structure:
{
  "score": <number 0-100>,
  "strengths": [<3-5 specific, non-generic insights>],
  "gaps": [<3-5 meaningful weaknesses or missing areas>],
  "requirements": {
    "location": <string|null>,
    "visa": <string|null>,
    "experience": <string|null>,
    "certifications": <string|null>
  },
  "ats_keywords": {
    "matched": [<relevant keywords>],
    "missing": [<important missing keywords>],
    "match_rate": <number 0-100>
  },
  "recommendations": [<3-5 actionable improvements>],
  "cover_letter": <string starting with "Dear Hiring Manager,\\n\\n" then 3 paragraphs separated by "\\n\\n" and ending with "\\n\\nRegards,\\n[Your Name]">,
  "company_name": <string|null>,
  "application_link": <string|null>,
  "contact_email": <string|null>
}

IMPORTANT:
- Ensure cover_letter uses proper paragraph spacing with "\\n\\n".
- Writing should feel natural, slightly conversational, and human.
- Avoid generic AI-style phrases and repetition.
- Include the mandatory closing line exactly as specified.
`;

  const response = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      {
        role: 'system',
        content: systemInstructions,
      },
      {
        role: 'user',
        content: userPrompt,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.85,
  });

  const text = response.choices[0]?.message?.content || '{}';

  try {
    const result = JSON.parse(text.trim()) as AnalysisResult;
    return result;
  } catch (error) {
    console.warn('Primary model failed, falling back to Gemini:', error);
    console.error('Failed to parse AI response:', error);
    throw new Error('The AI provided an invalid response. Please try again.');
  }
}
