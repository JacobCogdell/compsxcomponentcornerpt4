// Test with Vitest and React Testing Library - Written with assistance from Copilot
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../components/ProductCard";
import { describe, it, expect, vi } from "vitest";

describe("ProductCard Component", () => {
  it("renders product information", () => {
    render(
      <ProductCard
        name="Test Product"
        price={49.99}
        image="test.jpg"
        description="A great product for testing"
        onAddToCart={() => {}}
      />
    );

    expect(screen.getByText(/test product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$49\.99/)).toBeInTheDocument();
    expect(screen.getByText(/a great product for testing/i)).toBeInTheDocument();

    // Image alt text should match the product name
    const img = screen.getByAltText(/test product/i);
    expect(img).toBeInTheDocument();
  });

  it("calls onAddToCart when Add to Cart is clicked", () => {
    const mockAdd = vi.fn();

    render(
      <ProductCard
        name="Test Product"
        price={49.99}
        image="test.jpg"
        description="A great product for testing"
        onAddToCart={mockAdd}
      />
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);

    expect(mockAdd).toHaveBeenCalledTimes(1);
  });
});
