import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { WhatToExpect } from "./what-to-expect";

describe("WhatToExpect", () => {
  it("renders the section heading", () => {
    render(<WhatToExpect />);
    expect(
      screen.getByRole("heading", { name: /what to expect/i })
    ).toBeInTheDocument();
  });

  it("renders all expectation items with titles", () => {
    render(<WhatToExpect />);

    const titles = [
      "Service Length",
      "Worship Style",
      "Kids & Nursery",
      "After Service",
    ];

    titles.forEach((title) => {
      expect(
        screen.getByRole("heading", { name: title, level: 3 })
      ).toBeInTheDocument();
    });
  });

  it("renders descriptions for each expectation", () => {
    render(<WhatToExpect />);

    expect(screen.getByText(/90 minutes/i)).toBeInTheDocument();
    expect(screen.getByText(/contemporary music/i)).toBeInTheDocument();
    expect(screen.getByText(/nursery and childcare/i)).toBeInTheDocument();
    expect(screen.getByText(/fellowship.*new people/i)).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<WhatToExpect />);

    const sectionHeading = screen.getByRole("heading", {
      name: /what to expect/i,
    });
    expect(sectionHeading.tagName).toBe("H2");

    const serviceLength = screen.getByRole("heading", {
      name: "Service Length",
    });
    expect(serviceLength.tagName).toBe("H3");
  });
});
