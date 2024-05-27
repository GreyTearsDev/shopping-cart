import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import mockedProduct from "./__mocks__/mockedProduct";
import ProductCard from "./ProductCard";

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

describe("ProductCard component", () => {
  it("renders fields with correct information", () => {
    useOutletContext.mockReturnValue([null, null, [], vi.fn()]);

    render(<ProductCard product={mockedProduct} />);

    expect(screen.getByRole("heading", { name: "productTitle" }).textContent).toMatch(/producttitle/i);
    expect(screen.getByRole("heading", { name: "10 $" }).textContent).toMatch(/10/i);
    expect(screen.getByRole("button", { name: "Add to cart" }).textContent).toMatch(/add to cart/i);
  });

  it("calls addToCart when button is clicked", async () => {
    const setCartMock = vi.fn();
    useOutletContext.mockReturnValue([null, null, [], setCartMock]);
    const user = userEvent.setup();

    render(<ProductCard product={mockedProduct} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(setCartMock).toHaveBeenCalledTimes(1);
    expect(setCartMock).toHaveBeenCalledWith([{ id: mockedProduct.id, amount: 1 }]);
  });
});
