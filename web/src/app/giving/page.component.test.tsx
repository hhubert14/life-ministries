import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import GivingPage from "./page";

describe("GivingPage", () => {
  it("renders the GivingHero section with title and scripture", () => {
    render(<GivingPage />);
    expect(screen.getByText("Support Our Mission")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Giving" })).toBeInTheDocument();
    expect(
      screen.getByText(/for where your treasure is/i)
    ).toBeInTheDocument();
  });

  it("renders the WhyWeGive section", () => {
    render(<GivingPage />);
    expect(
      screen.getByRole("heading", { name: /why we give/i })
    ).toBeInTheDocument();
  });

  it("renders the WaysToGive section", () => {
    render(<GivingPage />);
    expect(
      screen.getByRole("heading", { name: /ways to give/i })
    ).toBeInTheDocument();
  });

  it("renders the GivingContact section", () => {
    render(<GivingPage />);
    expect(
      screen.getByRole("heading", { name: /have questions/i })
    ).toBeInTheDocument();
  });
});
