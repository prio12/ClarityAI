import { createClient } from "@/lib/supabase/server";
import { recordSignupAttribution } from "@/lib/supabase/signup-attribution";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      return NextResponse.redirect(new URL("/login", origin));
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const source =
        request.cookies.get("clarity_signup_source")?.value ?? "unknown";

      await recordSignupAttribution(user.id, source);
    }
  }

  return NextResponse.redirect(new URL(next, origin));
}
