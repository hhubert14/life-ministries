import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WaysToGive } from "./ways-to-give";

describe("WaysToGive", () => {
  it("renders the section heading", () => {
    render(<WaysToGive />);
    expect(
      screen.getByRole("heading", { name: /ways to give/i })
    ).toBeInTheDocument();
  });

  it("renders the online giving option with link", () => {
    render(<WaysToGive />);
    expect(
      screen.getByRole("heading", { name: /give online/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/simple and secure giving/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /give now/i })
    ).toHaveAttribute("href", expect.stringContaining("suran.com"));
  });

  it("renders the in-person giving option", () => {
    render(<WaysToGive />);
    expect(
      screen.getByRole("heading", { name: /give in person/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/giving station/i)
    ).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<WaysToGive />);

    // Section heading should be h2
    const sectionHeading = screen.getByRole("heading", {
      name: /ways to give/i,
    });
    expect(sectionHeading.tagName).toBe("H2");

    // Giving method headings should be h3
    const onlineHeading = screen.getByRole("heading", {
      name: /give online/i,
    });
    expect(onlineHeading.tagName).toBe("H3");

    const inPersonHeading = screen.getByRole("heading", {
      name: /give in person/i,
    });
    expect(inPersonHeading.tagName).toBe("H3");
  });

  it("opens online giving link in new tab", () => {
    render(<WaysToGive />);
    const link = screen.getByRole("link", { name: /give now/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });
});
