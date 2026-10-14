import { type EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";
import { recordSignupAttribution } from "@/lib/supabase/signup-attribution";

async function recordCurrentUserAttribution(request: NextRequest) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const source =
      request.cookies.get("clarity_signup_source")?.value ?? "unknown";

    await recordSignupAttribution(user.id, source);
  }
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      await recordCurrentUserAttribution(request);
      return NextResponse.redirect(new URL("/dashboard", origin));
    }
  }

  if (token_hash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      await recordCurrentUserAttribution(request);
      return NextResponse.redirect(new URL("/dashboard", origin));
    }
  }

  return NextResponse.redirect(new URL("/login", origin));
}
