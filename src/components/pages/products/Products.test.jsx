import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import Products from "./Products";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

vi.mock("../../shared/LoadingSpinner", () => ({
  default: () => <p>Loading...</p>,
}));

vi.mock("./ProductsFilter", () => ({
  default: () => <button>All</button>,
}));

vi.mock("./ProductCard", () => ({
  default: (product) => <h2>{product.title}</h2>,
}));

vi.mock("./ProductCard", () => ({
  default: (product) => <h2>{product.title}</h2>,
}));

vi.mock("../../shared/ErrorMessage", () => ({
  default: ({ message }) => <p>{message}</p>,
}));

describe("Products componet", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders ProductsFilter component", () => {
    useOutletContext.mockReturnValue([[], false]);
    render(<Products />);

    expect(screen.getByRole("button", { name: /all/i })).toBeInTheDocument();
  });

  it("renders ProductCard component when isLoading is false", () => {
    const mockProduct = { id: 1, title: "test" };
    useOutletContext.mockReturnValue([[mockProduct], false]);
    render(<Products />);

    const heading = screen.getByRole("heading", mockProduct.title);
    expect(heading).toBeInTheDocument();
  });

  it("renders 'Loading' text when isLoading is true", () => {
    useOutletContext.mockReturnValue([[], true]);
    render(<Products />);

    expect(screen.getByRole("paragraph", /loading/i)).toBeInTheDocument();
  });

  it("renders error message when 'error' is true", () => {
    useOutletContext.mockReturnValue([null, null, null, null, true]);
    render(<Products />);

    expect(screen.getByRole("paragraph", /There was an error while fetching the data. Please, refresh the page/i))
      .toBeInTheDocument();
  });
});
