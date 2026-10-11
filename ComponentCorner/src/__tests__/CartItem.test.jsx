// Test with Vitest and React Testing Library - Written with assistance from Copilot
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../components/CartItem";
import { describe, it, expect, vi } from "vitest";

describe("CartItem Component", () => {
  it("renders the item name and price", () => {
    render(
      <CartItem
        name="Test Widget"
        price={19.99}
        onRemove={() => {}}
      />
    );

    expect(screen.getByText(/test widget/i)).toBeInTheDocument();
    expect(screen.getByText(/\$19\.99/)).toBeInTheDocument();
  });

  it("calls onRemove when the Remove button is clicked", () => {
    const mockRemove = vi.fn();

    render(
      <CartItem
        name="Test Widget"
        price={19.99}
        onRemove={mockRemove}
      />
    );

    const removeButton = screen.getByRole("button", { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
  });
});
