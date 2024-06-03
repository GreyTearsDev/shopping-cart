import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import mockedProduct from "./__mocks__/mockedProduct";
import ProductCard from "./ProductCard";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
    useOutletContext: vi.fn(),
  };
});

vi.mock("../../util/addProductToCart", () => ({
  default: vi.fn(),
}));

vi.mock("../shared/Button", () => ({
  default: () => <button>Add to Cart</button>,
}));

describe("ProductCard component", () => {
  let cart;
  let setCartMock;

  beforeEach(() => {
    cart = [];
    setCartMock = vi.fn((product) => {
      cart.push(product);
    });
    useOutletContext.mockReturnValue([null, null, cart, setCartMock]);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders fields with correct information", () => {
    render(<ProductCard product={mockedProduct} />);

    expect(screen.getByRole("heading", { name: "productTitle" }).textContent).toMatch(/producttitle/i);
    expect(screen.getByRole("heading", { name: "$10" }).textContent).toMatch(/10/i);
    expect(screen.getByAltText(mockedProduct.title));
  });

  it("calls addToCart when button is clicked", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={mockedProduct} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(setCartMock).toHaveBeenCalledTimes(1);
  });

  it("adds product to the 'cart' when 'addToCart' gets called", async () => {
    const user = userEvent.setup();

    render(<ProductCard product={mockedProduct} />);

    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    expect(cart[0]).toContainEqual({ id: mockedProduct.id, amount: 1 });
  });

  it("renders the Button component", () => {
    render(<ProductCard product={mockedProduct} />);

    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });

  it("displays an img element based on the 'image' property of te product", () => {
    render(<ProductCard product={mockedProduct} />);

    const image = screen.getByRole("img", { name: mockedProduct.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockedProduct.image);
    expect(image).toHaveAttribute("alt", mockedProduct.title);
  });

  it("displays the rating information based on the 'rating' property of the product", () => {
    const getStarsMock = vi.fn((rate) => {
      let stars = "";
      for (let i = 0; i < 5; i++) {
        if (rate === null || rate === undefined) return;
        (i < rate) ? stars += "★" : stars += "☆";
      }
      return stars;
    });

    render(<ProductCard product={mockedProduct} />);

    const paragraph = screen.getByText(
      `${getStarsMock(mockedProduct.rating.rate)} (${mockedProduct.rating.count} reviews)`,
    );

    expect(getStarsMock).toHaveBeenCalledTimes(1);
    expect(paragraph).toBeInTheDocument();
  });
});
