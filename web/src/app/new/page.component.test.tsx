import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NewPage from "./page";

describe("NewPage", () => {
  it("renders the NewHero section", () => {
    render(<NewPage />);
    expect(screen.getByText("We're Glad You're Here")).toBeInTheDocument();
    expect(screen.getByText("First Time Here?")).toBeInTheDocument();
  });

  it("renders the WhatToExpect section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /what to expect/i })
    ).toBeInTheDocument();
  });

  it("renders the ServiceLocation section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /service times & location/i })
    ).toBeInTheDocument();
  });

  it("renders the ConnectCard section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("heading", { name: /get connected/i })
    ).toBeInTheDocument();
  });

  it("renders the NewCta section", () => {
    render(<NewPage />);
    expect(
      screen.getByRole("link", { name: /get directions/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /contact us/i })
    ).toBeInTheDocument();
  });
});
