import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MinistryPage from "./page";

describe("MinistryPage", () => {
  describe("Men's Ministry page", () => {
    it("renders Men's Ministry hero", async () => {
      render(await MinistryPage({ params: Promise.resolve({ slug: "men" }) }));
      expect(screen.getByRole("heading", { name: "Men" })).toBeInTheDocument();
    });

    it("renders the Bible verse section", async () => {
      render(await MinistryPage({ params: Promise.resolve({ slug: "men" }) }));
      expect(
        screen.getByText(/be watchful, stand firm in the faith/i)
      ).toBeInTheDocument();
    });

    it("renders the contact section", async () => {
      render(await MinistryPage({ params: Promise.resolve({ slug: "men" }) }));
      expect(
        screen.getByRole("heading", { name: /get connected/i })
      ).toBeInTheDocument();
    });
  });

  describe("Coming Soon pages", () => {
    const comingSoonSlugs = ["youth", "children", "women", "worship", "outreach"];

    comingSoonSlugs.forEach((slug) => {
      it(`renders coming soon for ${slug} ministry`, async () => {
        render(await MinistryPage({ params: Promise.resolve({ slug }) }));
        expect(screen.getByText(/coming soon/i)).toBeInTheDocument();
      });
    });

    it("renders ministry name on coming soon page", async () => {
      render(
        await MinistryPage({ params: Promise.resolve({ slug: "youth" }) })
      );
      expect(
        screen.getByRole("heading", { name: "Youth Ministry" })
      ).toBeInTheDocument();
    });

    it("renders back link to ministries page", async () => {
      render(
        await MinistryPage({ params: Promise.resolve({ slug: "youth" }) })
      );
      const backLink = screen.getByRole("link", {
        name: /back to ministries/i,
      });
      expect(backLink).toHaveAttribute("href", "/ministries");
    });
  });
});
