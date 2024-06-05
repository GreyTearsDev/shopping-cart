import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../test-util";
import Button from "./Button";

describe("Button component", () => {
  it("renders a Link component with a button when type is 'link'", () => {
    renderWithTheme(
      <MemoryRouter>
        <Button type="link" path="test-path" text="Test Link" />
      </MemoryRouter>,
    );

    const linkElement = screen.getByRole("link");
    const buttonElement = screen.getByRole("button", { name: /test link/i });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test-path");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders a button and calls onClick when type is not 'link'", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    renderWithTheme(<Button type="normal" text="Normal Button" onClick={handleClick} />);

    const button = screen.getByRole("button", { name: /normal button/i });

    await user.click(button);
    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
