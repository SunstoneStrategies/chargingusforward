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
  const isMobile = document.documentElement.clientWidth <= 415;

  const [hoveredState, setHoveredState] = useState("");
  // const [isMarkerClicked, setIsMarkerClicked] = useState("");
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
            scale: 590,
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const geostate = geo.properties.name;
                const IsMain = appData.pointsData.some((data) => {
                  return (
                    "Missouri" === geostate || "West Virginia" === geostate
                  );
                });
                const isHighlighted = appData.pointsData.some((data, index) => {
                  return appData.pointsData[index].state === geostate;
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
          {appData.pointsData &&
            appData.pointsData.map(({ state, coordinates }, index) => (
              <Marker
                key={index} // Use index as the key for each Marker
                coordinates={coordinates}
                onMouseEnter={() => {
                  console.log(state);
                  if (!isMobile) {
                    console.log(state);
                    setHoveredState(state);
                  }
                }}
              >
                <g transform="translate(-12, -22) scale(1.2)">
                  <circle cx="12" cy="10" r="2" fill="white" />
                  <path
                    d="M12 24.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 14.7z"
                    fill="#fcbc0c"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="10" r="4" fill="#fcbc0c" />
                  <circle cx="12" cy="10" r="2" fill="white" />
                </g>
              </Marker>
            ))}
        </ComposableMap>

        {hoveredState !== "" ? (
          <CityInfoCard state={hoveredState} />
        ) : (
          <div></div>
        )}
      </div>
      {isMobile &&
        appData.pointsData &&
        appData.pointsData.map((point, index) => (
          <React.Fragment key={index}>
            <div className="card-container ">
              {
                <div
                  className="card"
                  style={{
                    padding: "10px",
                    margin: "10px",
                    border: "1px solid grey",
                    borderRadius: "10px!important",
                  }}
                >
                  {point.image !== "" ? (
                    <img
                      className="card-img-top"
                      src={point.image}
                      alt="carddetail"
                      height="150px"
                    />
                  ) : point.vimeoVideo !== "" ? (
                    <iframe
                      src={point.vimeoVideo}
                      width="350px"
                      height="190px"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={point.title}
                    ></iframe>
                  ) : point.youtubeVideo !== "" ? (
                    <iframe
                      src={point.vimeoVideo}
                      style={{ width: "350px", height: "190px" }}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={point.title}
                    ></iframe>
                  ) : (
                    <></>
                  )}
                  <div className="card-body">
                    <h5
                      className="card-title customcardtitle redColor"
                      style={{ fontWeight: "bold" }}
                    >
                      <span style={{ color: "#161e44" }}>
                        {" "}
                        {point.title.substring(0, 12)}
                      </span>
                      <span style={{ color: "#161e44" }}>
                        {" "}
                        {point.title.substring(13, 15)}
                      </span>
                    </h5>

                    <p className="card-text customcardtext">
                      {point.description}
                    </p>
                    <a
                      href="https://www.chargingusforward.com/kansas-city-streetcar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        style={{
                          width: "100%",
                          backgroundColor: "#161e44",
                          height: "28px",
                          color: "white",
                          fontSize: "11px",
                          border: "solid grey",
                        }}
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              }
            </div>
          </React.Fragment>
        ))}
    </>
  ) : (
    <div>Loading...</div>
  );
}
