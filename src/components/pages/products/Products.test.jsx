import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import Products from "./Products";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

describe("Products componet", () => {
  it("renders ProductsFilter component", () => {
    useOutletContext.mockReturnValue([[], null]);
    render(<Products />);

    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
  });

  it("renders ProductCard component when isLoading is false", () => {
    const mockProduct = { id: 1, title: "test" };
    useOutletContext.mockReturnValue([[mockProduct], false]);
    render(<Products />);

    expect(screen.getByRole("heading", { name: mockProduct.title }));
  });

  it("renders 'Loading' text when isLoading is true", () => {
    useOutletContext.mockReturnValue([[], true]);
    render(<Products />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
