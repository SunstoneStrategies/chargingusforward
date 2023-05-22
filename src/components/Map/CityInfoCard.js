import React from "react";
import "./style.css";

import appData from "./appData";
export default function CityInfoCard(props) {
  return props.state === "Missouri" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 17%, -78%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "300px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {/* <img
            className="card-img-top"
            src={appData.pointsData[4].image}
            alt="carddetail"
            height="170px"
          /> */}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
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
            <p className="card-text" style={{ fontSize: "12px" }}>
              {appData.pointsData[4].description}
            </p>
            <a
              href="https://www.chargingusforward.com/kc-ride"
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
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : (
    <div></div>
  );
}
