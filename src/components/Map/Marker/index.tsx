import React from "react";
import { Marker } from "react-simple-maps";
import Pin from "./Pin";
import Square from "./Square";
import { Location } from "../../../data/locations";
interface MapMarkerProps {
  location: Location;
  isSelected: boolean;
  onHover: (location: Location | null) => void;
  onHoverEnd: () => void;
}

export default function MapMarker({
  location,
  isSelected,
  onHover,
  onHoverEnd,
}: MapMarkerProps) {
  return (
    <Marker
      coordinates={location.coordinates}
      onMouseEnter={() => onHover(location)}
      onMouseLeave={onHoverEnd}
    >
      <g
        className="cursor-pointer transform transition-transform duration-200"
        style={{ transform: isSelected ? "scale(1.4)" : "scale(1.2)" }}
      >
        {location.type === "pin" ? <Pin /> : <Square />}
      </g>
    </Marker>
  );
}
