export interface Requirements {
  location: string | null;
  visa: string | null;
  experience: string | null;
  certifications: string | null;
}

export interface ATSKeywords {
  matched: string[];
  missing: string[];
  match_rate: number;
}

export interface AnalysisResult {
  score: number;
  strengths: string[];
  gaps: string[];
  requirements: Requirements;
  ats_keywords: ATSKeywords;
  recommendations: string[];
  cover_letter: string;
  company_name: string | null;
  application_link: string | null;
  contact_email: string | null;
}

export interface Analysis extends AnalysisResult {
  id: string;
  created_at: string;
  job_description: string;
  resume_text: string;
  user_id: string;
}
