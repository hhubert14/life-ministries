import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { ConnectCard } from "./connect-card";

describe("ConnectCard", () => {
  it("renders the section heading", () => {
    render(<ConnectCard />);
    expect(
      screen.getByRole("heading", { name: /get connected/i })
    ).toBeInTheDocument();
  });

  it("renders the welcome message", () => {
    render(<ConnectCard />);
    expect(
      screen.getByText(/we're glad you're here/i)
    ).toBeInTheDocument();
  });

  it("renders all connection options", () => {
    render(<ConnectCard />);

    const options = ["Baptism", "Volunteering", "Membership", "Life Groups"];

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  it("renders the contact email link", () => {
    render(<ConnectCard />);

    const emailLink = screen.getByRole("link", {
      name: /info@lifeministriesva\.com/i,
    });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@lifeministriesva.com"
    );
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<ConnectCard />);

    const sectionHeading = screen.getByRole("heading", {
      name: /get connected/i,
    });
    expect(sectionHeading.tagName).toBe("H2");
  });

  it("allows keyboard navigation to email link", async () => {
    const user = userEvent.setup();
    render(<ConnectCard />);

    const emailLink = screen.getByRole("link", {
      name: /info@lifeministriesva\.com/i,
    });

    // Tab until email link receives focus
    while (document.activeElement !== emailLink) {
      await user.tab();
    }

    expect(document.activeElement).toBe(emailLink);
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:info@lifeministriesva.com"
    );
  });
});
