import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenHero } from "./men-hero";

describe("MenHero", () => {
  it("renders the hero heading", () => {
    render(<MenHero />);
    expect(screen.getByRole("heading", { name: "Men" })).toBeInTheDocument();
  });

  it("renders the background image", () => {
    render(<MenHero />);
    const image = screen.getByRole("img", { name: /men's ministry/i });
    expect(image).toBeInTheDocument();
  });

  it("uses h1 for the main heading", () => {
    render(<MenHero />);
    const heading = screen.getByRole("heading", { name: "Men" });
    expect(heading.tagName).toBe("H1");
  });
});
