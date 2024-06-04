import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CheckedOutProductCard from "./CheckedOutProductCard";

vi.mock("../../../shared/AmountSetter", () => ({
  default: () => <p>Setting the amount</p>,
}));

describe("CheckedOutProductCard component", () => {
  let product;

  beforeEach(() => {
    product = {
      id: 1,
      title: "Product 1",
      price: 10,
      image: "product1.jpg",
      rating: { rate: 4, count: 10 },
      description: "Description 1",
    };
  });

  it("renders the title of the product", () => {
    render(<CheckedOutProductCard product={product} />);
    expect(screen.getByRole("heading", { name: product.title })).toBeInTheDocument();
  });

  it("renders the price of the product", () => {
    render(<CheckedOutProductCard product={product} />);
    expect(screen.getByText(`Price: $${product.price}`));
  });

  it("clicking the 'x' button calls onDelete function", async () => {
    const user = userEvent.setup();
    const onDeleteMock = vi.fn();

    render(<CheckedOutProductCard product={product} onDelete={onDeleteMock} />);

    const button = screen.getByRole("button", { name: /x/i });
    await user.click(button);
    expect(onDeleteMock).toHaveBeenCalledTimes(1);
  });

  it("renders the AmountSetter component", () => {
    render(<CheckedOutProductCard product={product} />);
    const incrementButton = screen.getByRole("button", { name: /\+/i });
    const decrementButton = screen.getByRole("button", { name: /-/i });
    const inputField = screen.getByRole("textbox");

    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(inputField).toBeInTheDocument();
  });

  it("renders the product image", () => {
    render(<CheckedOutProductCard product={product} />);
    expect(screen.getByAltText(`${product.title}`));
  });
});
