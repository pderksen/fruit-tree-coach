import { describe, expect, it } from "vitest";

import { zipToZone } from "./zone-lookup";

describe("zipToZone", () => {
  it("returns a zone for a known NYC zip", () => {
    // 100xx -> 7b per the lookup
    expect(zipToZone("10001")).toBe("7b");
  });

  it("returns a zone for a known LA zip", () => {
    // 900xx -> 10a
    expect(zipToZone("90001")).toBe("10a");
  });

  it("returns a zone for a known Miami zip", () => {
    // 331xx -> 10b
    expect(zipToZone("33101")).toBe("10b");
  });

  it("uses only the first three digits", () => {
    expect(zipToZone("10001")).toBe(zipToZone("10099"));
  });

  it("returns null for a prefix not in the table", () => {
    // 009 is not a real US zip prefix
    expect(zipToZone("00901")).toBeNull();
  });

  it("returns a zone string matching the USDA zone pattern", () => {
    const zone = zipToZone("80202"); // Denver -> 5b
    expect(zone).not.toBeNull();
    expect(zone).toMatch(/^\d{1,2}[ab]$/);
  });

  it("handles Alaska and Hawaii prefixes", () => {
    expect(zipToZone("99501")).toBe("4a"); // Anchorage (995xx)
    expect(zipToZone("96801")).toBe("11a"); // Honolulu
  });
});
