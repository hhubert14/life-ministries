import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { LocationMap } from "./location-map";

vi.mock("next/dynamic", () => ({
  default: (importFn: () => Promise<unknown>, options: { loading?: () => React.ReactNode }) => {
    const Loading = options?.loading;
    return function DynamicComponent() {
      return Loading ? <Loading /> : null;
    };
  },
}));

describe("LocationMap", () => {
  it("renders loading state initially", () => {
    render(<LocationMap />);

    expect(screen.getByText("Loading map...")).toBeInTheDocument();
  });
});
