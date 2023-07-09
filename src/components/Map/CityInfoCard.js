import React from "react";
import "./style.css";

import appData from "./appData";
export default function CityInfoCard(props) {
  const videoUrlMissouri = appData.pointsData[0].vimeoVideo;
  return props.state === "Missouri" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 12%, -58%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {appData.pointsData[0].image !== "" ? (
            <img
              className="card-img-top"
              src={appData.pointsData[0].image}
              alt="carddetail"
              height="150px"
            />
          ) : appData.pointsData[0].vimeoVideo !== "" ? (
            videoUrlMissouri && (
              <iframe
                src={appData.pointsData[0].vimeoVideo}
                width="300"
                height="190px"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={appData.pointsData[0].title}
              ></iframe>
            )
          ) : appData.pointsData[0].youtubeVideo !== "" ? (
            <iframe
              src={appData.pointsData[0].youtubeVideo}
              maxWidth="300px"
              height="190px"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="LA"
            ></iframe>
          ) : (
            <></>
          )}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              <span style={{ color: "#161e44" }}>
                {" "}
                {appData.pointsData[0].title.substring(0, 12)}
              </span>
              <span style={{ color: "#161e44" }}>
                {" "}
                {appData.pointsData[0].title.substring(13, 15)}
              </span>
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {appData.pointsData[0].description}
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
          <div className="tip"></div>
        </div>
      }
    </div>
  ) : props.state === "California" ? (
    <div
      className="card-container d-flex flex-wrap"
      style={{ position: "absolute", transform: "translate( 86%, -55%)" }}
    >
      {
        <div
          className="card"
          style={{
            flex: "0 0 auto",
            margin: "10px",
            maxWidth: "320px",
            padding: "10px",
            borderRadius: "20px",
          }}
        >
          {appData.pointsData[1].image !== "" ? (
            <img
              className="card-img-top"
              src={appData.pointsData[1].image}
              alt="carddetail"
              height="150px"
            />
          ) : appData.pointsData[1].vimeoVideo !== "" ? (
            videoUrlMissouri && (
              <iframe
                src={appData.pointsData[1].vimeoVideo}
                width="300"
                height="190px"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={appData.pointsData[1].title}
              ></iframe>
            )
          ) : appData.pointsData[1].youtubeVideo !== "" ? (
            <iframe
              src={appData.pointsData[1].youtubeVideo}
              maxWidth="300px"
              height="190px"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="LA"
            ></iframe>
          ) : (
            <></>
          )}
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "#E89725", fontWeight: "bold", fontSize: "15px" }}
            >
              <span style={{ color: "#161e44" }}>
                {" "}
                {appData.pointsData[1].title.substring(0, 12)}
              </span>
              <span style={{ color: "#161e44" }}>
                {" "}
                {appData.pointsData[1].title.substring(13, 15)}
              </span>
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {appData.pointsData[1].description}
            </p>
            <a
              href="https://www.chargingusforward.com/pogoh"
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
