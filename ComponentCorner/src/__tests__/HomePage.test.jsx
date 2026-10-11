// Test with Vitest and React Testing Library - Written with assistance from Copilot
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { describe, it, expect } from "vitest";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
  });

  it("displays the Hero section text", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/welcome to cogdell component corner/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/high‑quality components for every build/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/shop now/i)).toBeInTheDocument();
  });

  it("displays the intro section", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(screen.getByText(/why shop with us/i)).toBeInTheDocument();

    expect(
      screen.getByText(/we focus on quality, reliability, and great customer service/i)
    ).toBeInTheDocument();
  });
});
