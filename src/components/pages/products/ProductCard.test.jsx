import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import mockedProduct from "./__mocks__/mockedProduct";
import ProductCard from "./ProductCard";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

vi.mock("../../shared/Button", () => ({
  default: ({ type, text, onClick }) => <button onClick={onClick}>{text}</button>,
}));

vi.mock("../../util/addProductToCart", () => ({
  default: vi.fn(),
}));

describe("ProductCard component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders fields with correct information", () => {
    useOutletContext.mockReturnValue([null, null, [], vi.fn()]);

    render(<ProductCard product={mockedProduct} />);

    expect(screen.getByRole("heading", { name: "productTitle" }).textContent).toMatch(/producttitle/i);
    expect(screen.getByRole("heading", { name: "10 $" }).textContent).toMatch(/10/i);
  });

  it("calls addToCart when button is clicked", async () => {
    const setCartMock = vi.fn();
    useOutletContext.mockReturnValue([null, null, [], setCartMock]);
    const user = userEvent.setup();

    render(<ProductCard product={mockedProduct} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(setCartMock).toHaveBeenCalledTimes(1);
  });

  it("renders the Button component", () => {
    const setCartMock = vi.fn();

    useOutletContext.mockReturnValue([null, null, [], setCartMock]);

    render(<ProductCard product={mockedProduct} />);

    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });
});
