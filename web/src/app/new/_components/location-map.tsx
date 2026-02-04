"use client";

import dynamic from "next/dynamic";

const MapContent = dynamic(() => import("./map-content"), {
  ssr: false,
  loading: () => (
    <div className="aspect-video bg-border flex items-center justify-center">
      <span className="text-text-muted">Loading map...</span>
    </div>
  ),
});

export function LocationMap() {
  return <MapContent />;
}
