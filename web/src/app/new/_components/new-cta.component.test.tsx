import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NewCta } from "./new-cta";

describe("NewCta", () => {
  it("renders the Get Directions link", () => {
    render(<NewCta />);

    const directionsLink = screen.getByRole("link", {
      name: /get directions/i,
    });
    expect(directionsLink).toBeInTheDocument();
    expect(directionsLink).toHaveAttribute(
      "href",
      expect.stringContaining("maps.google.com")
    );
    expect(directionsLink).toHaveAttribute("target", "_blank");
    expect(directionsLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the Contact Us link", () => {
    render(<NewCta />);

    const contactLink = screen.getByRole("link", { name: /contact us/i });
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute(
      "href",
      "mailto:info@lifeministriesva.com"
    );
  });
});
