import { describe, expect, it } from "vitest";
import { titleCase } from "./utils";

describe("utils", () => {
  it("should be able to import utils", () => {
    expect(titleCase).toBeDefined();
  });
});

describe("titleCase", () => {
  it("should capitalize the first letter of a string", () => {
    expect(titleCase("hello")).toBe("Hello");
  });
  it("should capitalize the first letter of each word in a string", () => {
    expect(titleCase("hello world")).toBe("Hello World");
  });
});
