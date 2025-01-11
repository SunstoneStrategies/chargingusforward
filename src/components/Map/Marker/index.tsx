import React from "react";
import { Marker } from "react-simple-maps";
import Pin from "./Pin";
import Square from "./Square";
import { Location } from "../../../data/locations";
interface MapMarkerProps {
  location: Location;
  isSelected: boolean;
  onSelect: (location: Location | null) => void;
  onHover: (location: Location | null) => void;
}

export default function MapMarker({
  location,
  isSelected,
  onSelect,
  onHover,
}: MapMarkerProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(isSelected ? null : location);
  };

  return (
    <Marker
      coordinates={location.coordinates}
      onClick={handleClick}
      onMouseEnter={() => onHover(location)}
      onMouseLeave={() => {
        // Only close on mouse leave if it wasn't clicked (selected)
        if (!isSelected) {
          onHover(null);
        }
      }}
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
