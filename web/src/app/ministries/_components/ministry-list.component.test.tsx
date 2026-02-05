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

  it("renders all ministry cards as links", () => {
    render(<MinistryList />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  it("links to correct ministry detail pages", () => {
    render(<MinistryList />);

    const links = screen.getAllByRole("link");

    // Check that links have correct hrefs by finding the link containing each ministry name
    expect(links.find((l) => l.textContent?.includes("Youth Ministry"))).toHaveAttribute(
      "href",
      "/ministries/youth"
    );
    expect(links.find((l) => l.textContent?.includes("Children's Ministry"))).toHaveAttribute(
      "href",
      "/ministries/children"
    );
    expect(links.find((l) => l.textContent?.includes("Women's Ministry"))).toHaveAttribute(
      "href",
      "/ministries/women"
    );
    expect(links.find((l) => l.textContent?.match(/^Men's Ministry/))).toHaveAttribute(
      "href",
      "/ministries/men"
    );
    expect(links.find((l) => l.textContent?.includes("Worship Ministry"))).toHaveAttribute(
      "href",
      "/ministries/worship"
    );
    expect(links.find((l) => l.textContent?.includes("Outreach Ministry"))).toHaveAttribute(
      "href",
      "/ministries/outreach"
    );
  });
});
