import { createClient } from "@/lib/supabase/server";
import { recordSignupAttribution } from "@/lib/supabase/signup-attribution";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json(
      { error: "Authentication required." },
      { status: 401 },
    );
  }

  const source =
    request.cookies.get("clarity_signup_source")?.value ?? "unknown";

  await recordSignupAttribution(user.id, source);

  return NextResponse.json({ success: true });
}
