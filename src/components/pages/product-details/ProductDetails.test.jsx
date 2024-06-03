import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useOutletContext } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ProductDetails from "./ProductDetails";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("ProductDetails component", () => {
  let cart;
  let storeData;

  beforeEach(() => {
    storeData = [
      {
        id: 1,
        title: "Product 1",
        price: 10,
        image: "product1.jpg",
        rating: { rate: 4, count: 10 },
        description: "Description 1",
      },
      +{
        id: 2,
        title: "Product 2",
        price: 20,
        image: "product2.jpg",
        rating: { rate: 3, count: 5 },
        description: "Description 2",
      },
    ];
    cart = [];
    const setCart = vi.fn();
    useOutletContext.mockReturnValue([storeData, null, cart, setCart]);
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>,
    );
  });

  it("renders ProductDetails component with mock data", () => {
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("$10")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });
});
