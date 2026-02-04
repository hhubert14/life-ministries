import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NewHero } from "./new-hero";

describe("NewHero", () => {
  it("renders the label text", () => {
    render(<NewHero />);
    expect(screen.getByText("First Time Here?")).toBeInTheDocument();
  });

  it("renders the main headline", () => {
    render(<NewHero />);
    expect(
      screen.getByRole("heading", { name: /we're glad you're here/i, level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the subtitle", () => {
    render(<NewHero />);
    expect(
      screen.getByText(/life ministries is a place where people can meet jesus/i)
    ).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<NewHero />);
    const heading = screen.getByRole("heading", {
      name: /we're glad you're here/i,
    });
    expect(heading.tagName).toBe("H1");
  });
});
