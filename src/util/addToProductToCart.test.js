import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import addProductToCart from "./addToProductToCart";

const setCartMock = vi.fn()

describe('addProductToCart', () => {
  
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("adds a new product to the cart", () => {
    const initialCart = [];

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCartMock);

    expect(setCartMock).toHaveBeenCalledWith([{ id: 1, amount: 1 }]);
  });

  it("increments the amount if the product already exists in the cart", () => {
    const initialCart = [{ id: 1, amount: 1 }];

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCartMock);

    expect(setCartMock).toHaveBeenCalledWith([{ id: 1, amount: 2 }]);
  });

  it("does not affect other products in the cart", () => {
    const initialCart = [{ id: 1, amount: 1 }, { id: 2, amount: 1 }];

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCartMock);

    expect(setCartMock).toHaveBeenCalledWith([{ id: 1, amount: 2 }, { id: 2, amount: 1 }]);
  });
});
