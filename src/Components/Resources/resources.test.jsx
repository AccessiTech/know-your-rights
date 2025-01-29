import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Resources from "./Resources";
import { digitalResources, printableResources } from "./content";

describe("Resources", () => {
  it("renders without crashing", () => {
    expect(render(<Resources />)).toBeDefined();
  });

  it("renders digital and printable resource headers", () => {
    const resources = render(<Resources />).container;
    const headers = resources.querySelectorAll("h2");
    expect(headers[0].textContent).toBe("Digital Resources");
    expect(headers[1].textContent).toBe("Printable Resources");
  });

  it("renders the correct number of resource buttons", () => {
    const resources = render(<Resources />).container;
    const buttons = resources.querySelectorAll(".resource-btn");
    const count = Object.keys(printableResources).length + (Object.keys(digitalResources).length);
    expect(buttons.length).toBe(count);
  });
});