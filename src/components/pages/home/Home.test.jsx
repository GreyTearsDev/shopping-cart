import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Home component", () => {
  it("renders the correct heading", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "EXPLORE OUR STORE" }).textContent).toMatch(/explore our store/i);
  });
});
