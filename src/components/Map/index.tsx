import React, { useState, useCallback, useRef } from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Location } from "../../data/locations";
import { locations } from "../../data/locations";
import MapMarker from "./Marker";
import InfoCard from "./InfoCard";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const getPopUpOffset = (location: Location) => {
  if (location.popUpLocation === "above" && location.type === "square") {
    return { y: -310, x: -125 };
  }
  if (location.popUpLocation === "below" && location.type === "square") {
    return { y: 17, x: -125 };
  }
  // no use case for above and pin
  if (location.popUpLocation === "above" && location.type === "pin") {
    return { y: -315, x: -122 };
  }
  if (location.popUpLocation === "below" && location.type === "pin") {
    return { y: 10, x: -122 };
  }
  throw new Error("Invalid popUpLocation");
};

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const mapRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // // Handle map click to close selected location
  // const handleMapClick = (event: React.MouseEvent) => {
  //   // Only close if clicking the map background, not a marker or info card
  //   if (event.target === event.currentTarget) {
  //     setSelectedLocation(null);
  //   }
  // };

  // Handle escape key to close selected location
  React.useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedLocation(null);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto" ref={mapRef}>
      <div className="aspect-[4/3] w-full">
        <ComposableMap
          projection="geoAlbersUsa"
          className="w-full h-full"
          projectionConfig={{
            scale: 900,
            center: [-96, 38],
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#161e44"
                  stroke="white"
                  strokeWidth={1}
                />
              ))
            }
          </Geographies>

          {locations.map((location) => (
            <MapMarker
              key={`marker-${location.id}`}
              location={location}
              isSelected={selectedLocation?.id === location.id}
              onSelect={setSelectedLocation}
              onHover={setSelectedLocation}
            />
          ))}

          {locations.map((location) => {
            const offset = getPopUpOffset(location);
            return (
              selectedLocation?.id === location.id && (
                <Marker
                  key={`infocard-${location.id}`}
                  coordinates={location.coordinates}
                >
                  <foreignObject
                    y={offset.y}
                    x={offset.x}
                    width={250}
                    height={370}
                    className="pointer-events-none"
                    style={{ zIndex: 1000 }}
                  >
                    <InfoCard location={location} />
                  </foreignObject>
                </Marker>
              )
            );
          })}
        </ComposableMap>
      </div>

      {isMobile && (
        <div className="grid grid-cols-1 gap-4 mt-4 px-4">
          {locations.map((location) => (
            <InfoCard key={location.id} location={location} />
          ))}
        </div>
      )}
    </div>
  );
}