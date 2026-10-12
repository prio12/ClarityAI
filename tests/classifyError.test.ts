import { describe, expect, it } from "vitest";
import { classifyError, getProviderStatusCode } from "../lib/ai/classifyError";

describe("classifyError", () => {
  it.each([
    [429, "capacity_or_rate_limit"],
    [503, "capacity_or_rate_limit"],
    [500, "other"],
    [400, "other"],
    [401, "other"],
    [403, "other"],
  ] as const)("classifies HTTP %i correctly", (status, expected) => {
    expect(classifyError({ status, message: "Provider error" })).toBe(expected);
  });

  it("classifies a rate-limit message without a status code", () => {
    expect(classifyError({ message: "Too many requests" })).toBe(
      "capacity_or_rate_limit",
    );
  });

  it("classifies a quota message without a status code", () => {
    expect(classifyError({ message: "Quota exceeded" })).toBe(
      "capacity_or_rate_limit",
    );
  });

  it("classifies a network timeout without a status code as other", () => {
    expect(classifyError({ message: "connect ETIMEDOUT" })).toBe("other");
  });

  it("supports statusCode as well as status", () => {
    expect(getProviderStatusCode({ statusCode: 429 })).toBe(429);
  });

  it("returns null when no valid status code exists", () => {
    expect(getProviderStatusCode(new Error("Network timeout"))).toBe(null);
    expect(getProviderStatusCode({ status: 999 })).toBe(null);
  });
});
