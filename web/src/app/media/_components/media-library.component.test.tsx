import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MediaLibrary } from "./media-library";

describe("MediaLibrary", () => {
  it("renders the section heading", () => {
    render(<MediaLibrary />);
    expect(
      screen.getByRole("heading", { name: /media library/i })
    ).toBeInTheDocument();
  });

  it("renders filter tabs", () => {
    render(<MediaLibrary />);

    const filterTabs = ["Series", "Topics", "Speakers", "Scripture"];

    filterTabs.forEach((tab) => {
      expect(screen.getByRole("button", { name: tab })).toBeInTheDocument();
    });
  });

  it("renders placeholder sermon cards with title, date, and speaker", () => {
    render(<MediaLibrary />);

    // Check that sermon titles exist as h3 headings
    expect(
      screen.getByRole("heading", { name: "A Life of Prayer", level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "What Do I Still Lack?", level: 3 })
    ).toBeInTheDocument();

    // Check that speaker names are rendered
    expect(screen.getAllByText(/pastor jon/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/bishop lynn/i)).toBeInTheDocument();

    // Check that dates are rendered
    expect(screen.getByText(/feb 16, 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/jan 26, 2025/i)).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<MediaLibrary />);

    // Section heading should be h2
    const sectionHeading = screen.getByRole("heading", {
      name: /media library/i,
    });
    expect(sectionHeading.tagName).toBe("H2");

    // Sermon titles should be h3
    const sermonTitle = screen.getByRole("heading", {
      name: "A Life of Prayer",
    });
    expect(sermonTitle.tagName).toBe("H3");
  });
});
