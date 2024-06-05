import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithTheme } from "../../../test-util";
import CheckedOutProductCard from "./CheckedOutProductCard";

vi.mock("../../../shared/AmountSetter", () => ({
  default: () => <p>Setting the amount</p>,
}));

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    Link: ({ to, children }) => <a href={to}>{children}</a>,
    useOutletContext: vi.fn(),
  };
});

describe("CheckedOutProductCard component", () => {
  let product;
  let cart;
  let setCart;

  beforeEach(() => {
    product = {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "product1.jpg",
      rating: { rate: 4, count: 10 },
      description: "Description 1",
    };

    cart = [product];
    setCart = vi.fn();
    useOutletContext.mockReturnValue([null, null, cart, setCart]);
  });

  it("renders the title of the product", () => {
    renderWithTheme(<CheckedOutProductCard product={product} />);
    expect(screen.getByRole("heading", { name: product.title })).toBeInTheDocument();
  });

  it("renders the price of the product", () => {
    renderWithTheme(<CheckedOutProductCard product={product} />);
    expect(screen.getByText(`Price: $${product.price}`));
  });

  it("clicking the 'x' button calls onDelete function", async () => {
    const user = userEvent.setup();
    const onDeleteMock = vi.fn();

    renderWithTheme(<CheckedOutProductCard product={product} onDelete={onDeleteMock} />);

    const button = screen.getByRole("button", { name: /x/i });
    await user.click(button);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it("renders the AmountSetter component", () => {
    renderWithTheme(<CheckedOutProductCard product={product} />);
    const incrementButton = screen.getByRole("button", { name: /\+/i });
    const decrementButton = screen.getByRole("button", { name: /-/i });
    const inputField = screen.getByRole("textbox");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("renders the product image", () => {
    renderWithTheme(<CheckedOutProductCard product={product} />);
    expect(screen.getByAltText(`${product.title}`));
  });
});
