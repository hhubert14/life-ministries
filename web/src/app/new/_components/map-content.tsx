"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const CHURCH_LOCATION = { lat: 37.4024, lng: -79.1422 };

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapContent() {
  return (
    <div className="aspect-video">
      <MapContainer
        center={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]}
        zoom={15}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[CHURCH_LOCATION.lat, CHURCH_LOCATION.lng]}
          icon={markerIcon}
        >
          <Popup>
            Life Ministries
            <br />
            2213 Cobbs St, Lynchburg, VA 24501
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
