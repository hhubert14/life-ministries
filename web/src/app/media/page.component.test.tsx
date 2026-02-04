import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MediaPage from "./page";

describe("MediaPage", () => {
  it("renders the MediaHero section", () => {
    render(<MediaPage />);
    expect(screen.getByText("Watch & Listen")).toBeInTheDocument();
    expect(screen.getByText("Messages")).toBeInTheDocument();
  });

  it("renders the FeaturedMessage section", () => {
    render(<MediaPage />);
    expect(
      screen.getByRole("heading", { name: /most recent/i })
    ).toBeInTheDocument();
  });

  it("renders the MediaLibrary section", () => {
    render(<MediaPage />);
    expect(
      screen.getByRole("heading", { name: /media library/i })
    ).toBeInTheDocument();
  });

  it("renders the MediaCta section", () => {
    render(<MediaPage />);
    expect(
      screen.getByRole("heading", { name: /never miss a message/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /subscribe/i })
    ).toBeInTheDocument();
  });
});
