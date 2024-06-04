import { describe, expect, it, vi, afterEach } from "vitest";
import addProductToCart from "./addProductToCart";

const setCartMock = vi.fn()

describe('addProductToCart', () => {
  
 afterEach(() => {
    vi.restoreAllMocks()
  })

  it("adds a new product to the cart", () => {
    const initialCart = [];

    addProductToCart({ id: 1, amount: 1 }, 1, initialCart, setCartMock);

    expect(setCartMock).toHaveBeenCalledWith([{ id: 1, amount: 1 }]);
  });


  it("does not affect other products in the cart", () => {
    const initialCart = [{ id: 1, amount: 1 }, { id: 2, amount: 1 }];

    addProductToCart({ id: 1, amount: 1 }, 1, initialCart, setCartMock);

    expect(setCartMock).toHaveBeenCalledWith([{ id: 1, amount: 1 }, { id: 2, amount: 1 }]);
  });
});
