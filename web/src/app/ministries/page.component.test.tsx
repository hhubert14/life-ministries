import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MinistriesPage from "./page";

describe("MinistriesPage", () => {
  it("renders the MinistriesHero section", () => {
    render(<MinistriesPage />);
    expect(screen.getByText("Our Ministries")).toBeInTheDocument();
    expect(screen.getByText("Get Connected")).toBeInTheDocument();
  });

  it("renders the MinistryList section", () => {
    render(<MinistriesPage />);
    expect(
      screen.getByRole("heading", { name: /ministries at life/i })
    ).toBeInTheDocument();
  });

  it("renders the GetInvolved section", () => {
    render(<MinistriesPage />);
    expect(
      screen.getByRole("heading", { name: /get involved/i })
    ).toBeInTheDocument();
  });

  it("renders the MinistriesCta section", () => {
    render(<MinistriesPage />);
    expect(
      screen.getByRole("link", { name: /plan your visit/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact us/i })
    ).toBeInTheDocument();
  });
});
