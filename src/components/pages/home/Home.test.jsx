import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { renderWithTheme } from "../../../test-util";
import Home from "./Home";

describe("Home component", () => {
  it("renders the correct heading", () => {
    renderWithTheme(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "EXPLORE OUR STORE" }).textContent).toMatch(/explore our store/i);
  });

  it("follows the link when clicked", async () => {
    const user = userEvent.setup();

    renderWithTheme(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<div>Products Page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const link = screen.getByRole("link", { name: /shop now/i });

    await user.click(link);

    expect(screen.getByText("Products Page")).toBeInTheDocument();
  });
});
