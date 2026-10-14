import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";

export function cleanSignupSource(value: string | null | undefined): string {
  if (typeof value !== "string") {
    return "unknown";
  }

  const cleaned = value.trim().toLowerCase();

  if (
    cleaned.length < 1 ||
    cleaned.length > 40 ||
    !/^[a-z0-9_-]+$/.test(cleaned)
  ) {
    return "unknown";
  }

  return cleaned;
}

export async function recordSignupAttribution(
  userId: string,
  source: string,
): Promise<void> {
  const supabase = createAdminClient();

  const { error } = await supabase.from("signup_attribution").insert({
    user_id: userId,
    source: cleanSignupSource(source),
  });

  // Existing attribution must never be overwritten.
  if (error?.code === "23505") {
    return;
  }

  if (error) {
    console.error("Failed to record signup attribution:", error.message);
  }
}
