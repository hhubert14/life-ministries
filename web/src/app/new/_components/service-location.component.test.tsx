import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ServiceLocation } from "./service-location";

describe("ServiceLocation", () => {
  it("renders the section heading", () => {
    render(<ServiceLocation />);
    expect(
      screen.getByRole("heading", { name: /service times & location/i })
    ).toBeInTheDocument();
  });

  it("renders service times", () => {
    render(<ServiceLocation />);

    expect(screen.getByText("10:30 AM")).toBeInTheDocument();
    expect(screen.getByText("6:30 PM")).toBeInTheDocument();
    expect(screen.getByText("6:00 PM")).toBeInTheDocument();
  });

  it("renders service day labels", () => {
    render(<ServiceLocation />);

    expect(screen.getByText("Sunday Morning")).toBeInTheDocument();
    expect(screen.getByText("Wednesday Evening")).toBeInTheDocument();
    expect(screen.getByText("Sunday Prayer Service")).toBeInTheDocument();
  });

  it("renders the address", () => {
    render(<ServiceLocation />);

    expect(screen.getByText("2213 Cobbs St")).toBeInTheDocument();
    expect(screen.getByText("Lynchburg, VA 24501")).toBeInTheDocument();
  });

  it("has proper heading hierarchy for accessibility", () => {
    render(<ServiceLocation />);

    const sectionHeading = screen.getByRole("heading", {
      name: /service times & location/i,
    });
    expect(sectionHeading.tagName).toBe("H2");

    const serviceTimesHeading = screen.getByRole("heading", {
      name: "Service Times",
    });
    expect(serviceTimesHeading.tagName).toBe("H3");
  });
});
