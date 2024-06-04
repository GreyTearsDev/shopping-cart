import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import Summary from "./Summary";

describe("Summary compontent", () => {
  it("correctly renders the amount of the bill before taxes", () => {
    render(<Summary billTotal={200} />);
    const paragraph = screen.getByText(/subtotal: \$200/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("correctly renders the amount of taxes to be payed", () => {
    render(<Summary taxesTotal={20} />);
    const paragraph = screen.getByText(/taxes: \$20/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("correctly renders the total amount to be payed after taxes", () => {
    render(<Summary billTotal={200} taxesTotal={20} />);
    const paragraph = screen.getByText(/total: \$220/i);
    expect(paragraph).toBeInTheDocument();
  });

  it("renders 'Place Order' button", () => {
    render(<Summary />);
    const button = screen.getByRole("button", { name: /place order/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onPlaceOrder when 'Place Order' button gets clicked on", async () => {
    const onPlaceOrderMock = vi.fn();
    const user = userEvent.setup();

    render(<Summary onPlaceOrder={onPlaceOrderMock} />);

    const button = screen.getByRole("button", { name: /place order/i });
    await user.click(button);
    expect(onPlaceOrderMock).toHaveBeenCalledTimes(1);
  });
});
