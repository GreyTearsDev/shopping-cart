import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage component", () => {
  it("renders the default error message", () => {
    render(<ErrorMessage />);
    expect(screen.getByText(/error 404: page not found/i)).toBeInTheDocument();
  });

  it("renders the custom error message", () => {
    render(<ErrorMessage message="This is a custom error message" />);
    expect(screen.getByText(/this is a custom error message/i)).toBeInTheDocument();
  });
});
