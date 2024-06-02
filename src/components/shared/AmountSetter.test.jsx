import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AmountSetter from "./AmountSetter";

describe("AmountSetter component", () => {
  let amount;
  let setAmount;

  beforeEach(() => {
    amount = 5;
    setAmount = vi.fn((newAmount) => {
      amount = parseInt(newAmount, 10);
    });
  });

  it("renders increment and decrement buttons", () => {
    render(
      <AmountSetter
        amount={amount}
        setAmount={setAmount}
      />,
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    const decrementButton = screen.getByRole("button", { name: "-" });
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
  });

  it("renders input field for custom amounts", () => {
    render(
      <AmountSetter
        amount={amount}
        setAmount={setAmount}
      />,
    );

    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  it("clicking on the increment increases the amount", async () => {
    const user = fireEvent.setup();

    render(
      <AmountSetter
        amount={amount}
        setAmount={setAmount}
      />,
    );

    const incrementButton = screen.getByRole("button", { name: "+" });
    await user.click(incrementButton);
    expect(amount).toBe(6);
  });

  it("clicking on the decrement decreases the amount", async () => {
    const user = fireEvent.setup();

    render(
      <AmountSetter
        amount={amount}
        setAmount={setAmount}
      />,
    );

    const decrementButton = screen.getByRole("button", { name: "-" });
    await user.click(decrementButton);
    expect(amount).toBe(4);
  });

  it("typing a custom value sets the amount the be said value", async () => {
    const user = fireEvent.setup();

    render(
      <AmountSetter
        amount={amount}
        setAmount={setAmount}
      />,
    );

    const inputField = screen.getByRole("textbox");
    await user.type(inputField, "2");
    expect(amount).toBe(52);
    await user.type(inputField, "3");
    expect(amount).toBe(523);
    await user.type(inputField, "4");
    expect(amount).toBe(5234);
  });
});
