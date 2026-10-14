import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

const ATTRIBUTION_COOKIE = "clarity_signup_source";
const THIRTY_DAYS = 30 * 24 * 60 * 60;

function cleanSource(value: string | null): string {
  if (value === null) return "unknown";

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

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const managedPrefixes = [
    "/dashboard",
    "/analyze",
    "/results",
    "/history",
    "/tracker",
    "/settings",
  ];

  const isManagedRoute =
    managedPrefixes.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    ) ||
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/check-email" ||
    pathname.startsWith("/auth/");

  let response = NextResponse.next({ request });

  if (isManagedRoute) {
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase public configuration.");
    }

    const supabase = createServerClient(supabaseUrl, supabaseKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({ request });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const isPublicRoute =
      pathname.startsWith("/login") ||
      pathname.startsWith("/signup") ||
      pathname.startsWith("/auth/") ||
      pathname === "/check-email";

    if (!user && !isPublicRoute) {
      response = NextResponse.redirect(new URL("/login", request.url));
    } else if (user && (pathname === "/login" || pathname === "/signup")) {
      response = NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.searchParams.has("utm_source")) {
    response.cookies.set(
      ATTRIBUTION_COOKIE,
      cleanSource(request.nextUrl.searchParams.get("utm_source")),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: THIRTY_DAYS,
      },
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
