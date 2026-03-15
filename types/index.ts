export interface AnalysisResult {
  score: number;
  strengths: string[];
  gaps: string[];
  requirements: {
    location: string | null;
    visa: string | null;
    experience: string | null;
    certifications: string | null;
  };
  ats_keywords: {
    matched: string[];
    missing: string[];
    match_rate: number;
  };
  recommendations: string[];
  cover_letter: string;
  company_name: string | null;
  application_link: string | null;
  contact_email: string | null;
}
