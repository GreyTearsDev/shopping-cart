import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import ProductsFilter from "./ProductsFilter";

describe("ProductsFilter component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should render a button with the text 'all'", () => {
    render(<ProductsFilter filterData={() => {}} keyWords={["all"]} />);

    const button = screen.getByRole("button", { name: /all/i });

    expect(button).toBeInTheDocument();
  });

  it("should call 'filterData' when the button is clicked", async () => {
    const user = userEvent.setup();
    const filterData = vi.fn();

    render(<ProductsFilter filterData={filterData} keyWords={["all"]} />);

    const button = screen.getByRole("button", { name: "All" });

    await user.click(button);

    expect(filterData).toHaveBeenCalledOnce();
  });
});
