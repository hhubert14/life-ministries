import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MenVerse } from "./men-verse";

describe("MenVerse", () => {
  it("renders the Bible verse", () => {
    render(<MenVerse />);
    expect(
      screen.getByText(/be watchful, stand firm in the faith/i)
    ).toBeInTheDocument();
  });

  it("renders the verse reference", () => {
    render(<MenVerse />);
    expect(screen.getByText(/1 corinthians 16:13/i)).toBeInTheDocument();
  });

  it("uses blockquote for the verse", () => {
    render(<MenVerse />);
    const blockquote = document.querySelector("blockquote");
    expect(blockquote).toBeInTheDocument();
  });

  it("uses cite element for the reference", () => {
    render(<MenVerse />);
    const cite = document.querySelector("cite");
    expect(cite).toBeInTheDocument();
    expect(cite).toHaveTextContent(/1 corinthians 16:13/i);
  });
});
