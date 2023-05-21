import React, { useState } from "react";
import CityInfoCard from "./CityInfoCard";
import appData from "./appData";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/united-states/us-albers.json";

export default function Map() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsMarkerClicked("");
  };
  const toggleShowImages = () => {
    setShowImages(!showImages);
  };
  const isMobile = document.documentElement.clientWidth <= 415;

  const [showImages, setShowImages] = useState(false);

  const [hoveredState, setHoveredState] = useState("");

  const coordinatedData = [
    {
      coordinates: [-94.578331, 39.099724],
      state: "Missouri",
    },
  ];
  const coordinatedDataStates = [
    {
      name: "Pennsylvania",
    },
    {
      name: "Maryland",
    },
    {
      name: "District of Columbia",
    },
    {
      name: "Michigan",
    },
    {
      name: "California",
    },
    {
      name: "Arizona",
    },
    {
      name: "New Mexico",
    },
    {
      name: "Kansas",
    },
    {
      name: "Missouri",
    },
    {
      name: "Ohio",
    },
    {
      name: "Illinois",
    },
  ];
  const [isMarkerClicked, setIsMarkerClicked] = useState("");
  const handleStateLeave = () => {
    setHoveredState("");
  };

  return geoUrl !== "" ? (
    <>
      <div className="container-map">
        <ComposableMap
          onClick={handleStateLeave}
          projection="geoAlbersUsa"
          style={{ width: "100%" }}
          projectionConfig={{
            scale: 700,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const state = geo.properties.name;
                const IsMain = coordinatedDataStates.some((data) => {
                  return "Missouri" === state;
                });
                const isHighlighted = coordinatedDataStates.some((data) => {
                  return data.name === state;
                });

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      IsMain ? "grey" : isHighlighted ? "#161e44" : "#161e44"
                    }
                    stroke="white"
                    strokeWidth={1}
                    style={{
                      default: {
                        outline: "#0000",
                      },
                      hover: {
                        fill: IsMain
                          ? "grey"
                          : isHighlighted
                          ? "#161e44"
                          : "#161e44",
                        outline: "none",
                      },
                      pressed: { fill: "#02A" },
                    }}
                  />
                );
              })
            }
          </Geographies>

          <Marker
            key={appData.pointsData[4].state}
            coordinates={appData.pointsData[4].coordinates}
            onMouseEnter={() => {
              console.log(appData.pointsData[4].state);
              if (!isMobile) {
                setHoveredState(appData.pointsData[4].state);
              }
            }}
          >
            <g transform="translate(-12, -22) scale(1.2)">
              <circle cx="12" cy="10" r="2" fill="white" />
              <path
                d="M12 24.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 14.7z"
                fill="yellow"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="4" fill="yellow" />
              <circle cx="12" cy="10" r="2" fill="white" />
            </g>
          </Marker>
        </ComposableMap>

        {hoveredState !== "" ? (
          <CityInfoCard
            state={hoveredState}
            // gallery={() => {
            //   // setIsMarkerClicked(hoveredState);
            //   // console.log(hoveredState + "clicked");
            // }}
          />
        ) : (
          <div></div>
        )}
      </div>
      {isMobile && (
        <>
          <div className="mobiletoshowLogo">
            <div className="card-container d-flex flex-wrap">
              {
                <div className="card myclass">
                  <img
                    className="card-img-top"
                    src={appData.pointsData[4].image}
                    alt="carddetail"
                  />
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle redColor"
                      style={{ fontWeight: "bold" }}
                    >
                      <span style={{ color: "#161e44" }}>
                        {" "}
                        {appData.pointsData[4].title.substring(0, 12)}
                      </span>
                      <span style={{ color: "#161e44" }}>
                        {" "}
                        {appData.pointsData[4].title.substring(13, 15)}
                      </span>
                    </h5>

                    <p className="card-text customcardtext">
                      {appData.pointsData[4].description}
                    </p>
                  </div>
                </div>
              }
            </div>
          </div>
        </>
      )}
    </>
  ) : (
    <div>Loading...</div>
  );
}
