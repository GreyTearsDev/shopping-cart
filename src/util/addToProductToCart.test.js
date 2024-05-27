import { describe, expect, it, vi } from "vitest";
import addProductToCart from "./addToProductToCart";

describe('addProductToCart', () => {
  it('adds a new product to the cart', () => {
    const initialCart = [];
    const setCart = vi.fn();

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCart);

    expect(setCart).toHaveBeenCalledWith([{ id: 1, amount: 1 }]);
  });

  it('increments the amount if the product already exists in the cart', () => {
    const initialCart = [{ id: 1, amount: 1 }];
    const setCart = vi.fn();

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCart);

    expect(setCart).toHaveBeenCalledWith([{ id: 1, amount: 2 }]);
  });

  it('does not affect other products in the cart', () => {
    const initialCart = [{ id: 1, amount: 1 }, { id: 2, amount: 1 }];
    const setCart = vi.fn();

    addProductToCart({ id: 1, amount: 1 }, initialCart, setCart);

    expect(setCart).toHaveBeenCalledWith([{ id: 1, amount: 2 }, { id: 2, amount: 1 }]);
  });
});
