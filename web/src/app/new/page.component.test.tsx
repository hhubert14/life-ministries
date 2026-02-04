import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import NewPage from "./page";

describe("NewPage", () => {
  it("renders the NewHero section", () => {
    render(<NewPage />);
    expect(screen.getByText("We're Glad You're Here")).toBeInTheDocument();
    expect(screen.getByText("First Time Here?")).toBeInTheDocument();
  });

  it("renders the WhatToExpect section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /what to expect/i })
    ).toBeInTheDocument();
  });

  it("renders the ServiceLocation section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /service times & location/i })
    ).toBeInTheDocument();
  });

  it("renders the ConnectCard section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /get connected/i })
    ).toBeInTheDocument();
  });

  it("renders the NewCta section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("link", { name: /get directions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it("allows keyboard navigation to CTA links in correct order", async () => {
    const user = userEvent.setup();
    render(<NewPage />);

    const getDirectionsLink = screen.getByRole("link", {
      name: /get directions/i,
    });
    const contactUsLink = screen.getByRole("link", { name: /contact us/i });

    // Tab until Get Directions link receives focus
    while (document.activeElement !== getDirectionsLink) {
      await user.tab();
    }
    expect(document.activeElement).toBe(getDirectionsLink);

    // Tab once more to Contact Us link
    await user.tab();
    expect(document.activeElement).toBe(contactUsLink);
  });
});
