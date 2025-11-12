import { describe, it, expect } from "vitest";
import { solve } from ".";

describe("Operators", () => {
  it("should calculate correct total cost (12.0, 20, 8)", () => {
    expect(solve(12.0, 20, 8)).equal(15);
  });

  it("should calculate correct total cost (10.25, 17, 5)", () => {
    expect(solve(10.25, 17, 5)).toBe(13);
  });

  it("should handle zero percentages", () => {
    expect(solve(100, 0, 0)).toBe(100);
  });
});