import React, { useState, useRef } from "react";
import {
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
    return { y: -366, x: -125 };
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

const stateNames = locations.map((location) => location.name);

export default function Map() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [isHoveringInfoCard, setIsHoveringInfoCard] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleHoverEnd = () => {
    // Only close if we're not hovering either element
    if (!isHoveringInfoCard) {
      setSelectedLocation(null);
    }
  };

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
    <div className="relative w-full mx-auto px-2" ref={mapRef}>
      <div className="aspect-[4/3] w-full p-[170px]">
        <ComposableMap
          projection="geoAlbersUsa"
          className="w-full h-full"
          width={850}
          height={650}
          projectionConfig={{
            scale: 1100,
            center: [-96, 38.5],
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      stateNames.includes(geo.properties.name)
                        ? "#808080" // highlighted state color
                        : "#161e44" // default state color
                    }
                    stroke="white"
                    strokeWidth={1}
                  />
                );
              })
            }
          </Geographies>

          {locations.map((location) => (
            <MapMarker
              key={`marker-${location.id}`}
              location={location}
              isSelected={selectedLocation?.id === location.id}
              onHover={setSelectedLocation}
              onHoverEnd={handleHoverEnd}
            />
          ))}

          {selectedLocation &&
            locations.map((location) => {
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
                      height={350}
                      className="pointer-events-auto"
                      style={{
                        zIndex: 1000,
                        borderRadius: "20px",
                        paddingTop:
                          location.popUpLocation === "above" ? "30px" : "0px",
                        paddingBottom:
                          location.popUpLocation === "above" ? "30px" : "0px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                      }}
                      onMouseEnter={() => setIsHoveringInfoCard(true)}
                      onMouseLeave={() => {
                        setIsHoveringInfoCard(false);
                        handleHoverEnd();
                      }}
                    >
                      <InfoCard location={location} />
                    </foreignObject>
                  </Marker>
                )
              );
            })}
        </ComposableMap>
      </div>
    </div>
  );
}
