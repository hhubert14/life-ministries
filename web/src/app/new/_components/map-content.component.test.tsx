import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import MapContent from "./map-content";

vi.mock("react-leaflet", () => ({
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map-container">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="marker">{children}</div>
  ),
  Popup: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="popup">{children}</div>
  ),
}));

vi.mock("leaflet", () => ({
  Icon: class MockIcon {
    constructor() {
      return {};
    }
  },
}));

describe("MapContent", () => {
  it("renders the map container", () => {
    render(<MapContent />);

    expect(screen.getByTestId("map-container")).toBeInTheDocument();
  });

  it("renders the tile layer for OpenStreetMap", () => {
    render(<MapContent />);

    expect(screen.getByTestId("tile-layer")).toBeInTheDocument();
  });

  it("renders a marker at the church location", () => {
    render(<MapContent />);

    expect(screen.getByTestId("marker")).toBeInTheDocument();
  });

  it("renders popup with church information", () => {
    render(<MapContent />);

    expect(screen.getByText(/Life Ministries/)).toBeInTheDocument();
    expect(screen.getByText(/2213 Cobbs St, Lynchburg, VA 24501/)).toBeInTheDocument();
  });
});
