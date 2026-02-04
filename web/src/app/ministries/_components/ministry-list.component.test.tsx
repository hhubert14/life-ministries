import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MinistryList } from "./ministry-list";

describe("MinistryList", () => {
  it("renders the section heading", () => {
    render(<MinistryList />);
    expect(
      screen.getByRole("heading", { name: /ministries at life/i })
    ).toBeInTheDocument();
  });

  it("renders all ministry items with names", () => {
    render(<MinistryList />);

    const ministryNames = [
      "Youth Ministry",
      "Children's Ministry",
      "Women's Ministry",
      "Men's Ministry",
      "Worship Ministry",
      "Outreach Ministry",
    ];

    ministryNames.forEach((name) => {
      expect(
        screen.getByRole("heading", { name, level: 3 })
      ).toBeInTheDocument();
    });
  });

  it("renders descriptions for each ministry", () => {
    render(<MinistryList />);

    // Check that descriptions exist (at least partial text)
    expect(screen.getByText(/students in grades/i)).toBeInTheDocument();
    expect(screen.getByText(/kids.*faith/i)).toBeInTheDocument();
    expect(screen.getByText(/women.*connect/i)).toBeInTheDocument();
    expect(screen.getByText(/men.*christ/i)).toBeInTheDocument();
    expect(screen.getByText(/worship.*praise/i)).toBeInTheDocument();
    expect(screen.getByText(/serve.*community/i)).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<MinistryList />);

    // Section heading should be h2
    const sectionHeading = screen.getByRole("heading", {
      name: /ministries at life/i,
    });
    expect(sectionHeading.tagName).toBe("H2");

    // Ministry names should be h3
    const youthMinistry = screen.getByRole("heading", {
      name: "Youth Ministry",
    });
    expect(youthMinistry.tagName).toBe("H3");
  });
});
