import { render, screen } from "@testing-library/react";
import { useOutletContext } from "react-router-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { afterEach, describe, expect, it, vi } from "vitest";
import getStars from "../../../util/getStars";
import mockedProduct from "../products/__mocks__/mockedProduct";
import ProductDetails from "./ProductDetails";

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    useLocation: vi.fn(() => ({
      state: {
        product: mockedProduct,
      },
    })),
  };
});

vi.mock("react-router-dom", () => ({
  ...vi.importActual("react-router-dom"),
  useOutletContext: vi.fn(),
}));

vi.mock("../../../util/getStars", () => ({
  default: (rate) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (rate === null || rate === undefined) return;
      (i < rate) ? stars += "★" : stars += "☆";
    }
    return stars;
  },
}));

describe("ProductDetails component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders ProductDetails component with mock data", () => {
    const cart = [];
    const setCartMock = vi.fn((product) => cart.push(product));
    useOutletContext.mockReturnValue([null, null, cart, setCartMock]);
    render(
      <MemoryRouter initialEntries={["/products/123"]}>
        <Routes>
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </MemoryRouter>,
    );

    const price = screen.getByRole("heading", { name: `${mockedProduct.price} $` });
    const title = screen.getByRole("heading", { name: mockedProduct.title });
    const rating = screen.getByText(`${getStars(mockedProduct.rating.rate)} (${mockedProduct.rating.count} reviews)`);
    const description = screen.getByText(mockedProduct.description);

    expect(price).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders 'Add to cart' button", () => {
    render(<ProductDetails />);
    expect(screen.getByRole("button", { name: /add to cart/i })).toBeInTheDocument();
  });
});
