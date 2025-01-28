import { test, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import Translate from "./Translate";

describe("Translate", () => {
  test("Translate renders without crashing", () => {
    expect(render(<Translate />)).toBeDefined();
  });

  test("Translate renders a div element", () => {
    const translate = render(<Translate />).container;
    expect(translate.querySelector("#google_translate_element")).toBeDefined();
  });

  test("Translate renders a div element with hide-credit class", () => {
    const translate = render(<Translate hideCredit />).container;
    expect(translate.querySelector("#google_translate_element.hide-credit")).toBeDefined();
  });
});
