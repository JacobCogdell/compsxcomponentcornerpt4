// Test with Vitest and React Testing Library - Written with assistance from Copilot
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock products so ProductsPage always has items
vi.mock("../data/products", () => ({
  default: [
    {
      id: 1,
      name: "Mock Product",
      price: 9.99,
      image: "test.jpg",
      description: "Test description"
    }
  ]
}));

// Replace BrowserRouter with MemoryRouter so we can force the route
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    BrowserRouter: ({ children }) => (
      <actual.MemoryRouter initialEntries={["/products"]}>
        {children}
      </actual.MemoryRouter>
    )
  };
});

// Mock localStorage
const mockGetItem = vi.fn();
const mockSetItem = vi.fn();

Object.defineProperty(window, "localStorage", {
  value: {
    getItem: mockGetItem,
    setItem: mockSetItem,
  },
});

describe("App Component — cart state + localStorage", () => {
  beforeEach(() => {
    mockGetItem.mockReset();
    mockSetItem.mockReset();
  });

  it("renders the App", () => {
    mockGetItem.mockReturnValue(null);

    render(<App />);

    expect(
      screen.getAllByText(/cogdell component corner/i).length
    ).toBeGreaterThan(0);
  });

  it("loads cart data from localStorage on startup", () => {
    const savedCart = JSON.stringify([{ name: "Saved Item", price: 10 }]);
    mockGetItem.mockReturnValue(savedCart);

    render(<App />);

    // Header displays Cart (1)
    expect(screen.getByText(/cart \(1\)/i)).toBeInTheDocument();
  });

  it("saves cart changes to localStorage when cart updates", () => {
    mockGetItem.mockReturnValue(null);

    render(<App />);

    // ProductsPage is guaranteed to render
    const addButton = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(addButton);

    expect(mockSetItem).toHaveBeenCalled();
    expect(mockSetItem).toHaveBeenCalledWith(
      "cart",
      expect.stringContaining('"name"')
    );
  });
});
