export type ErrorType = "capacity_or_rate_limit" | "other";

export function getProviderStatusCode(error: unknown): number | null {
  if (typeof error !== "object" || error === null) return null;

  const value = error as { status?: unknown; statusCode?: unknown };
  const status = value.status ?? value.statusCode;

  return typeof status === "number" && status >= 100 && status <= 599
    ? status
    : null;
}

export function classifyError(error: unknown): ErrorType {
  const statusCode = getProviderStatusCode(error);

  let message = "";
  if (typeof error === "object" && error !== null && "message" in error) {
    const value = (error as { message?: unknown }).message;
    if (typeof value === "string") message = value;
  }

  if (
    (statusCode !== null && [429, 503, 529].includes(statusCode)) ||
    /rate.?limit|too many requests|quota|resource exhausted|overloaded|capacity|temporarily unavailable/i.test(
      message,
    )
  ) {
    return "capacity_or_rate_limit";
  }

  return "other";
}
