import React, { useState, useRef, useEffect } from "react";
import { Location } from "../../../data/locations";
import Player from "@vimeo/player";

interface InfoCardProps {
  location: Location;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export default function InfoCard({
  location,
  isPlaying,
  setIsPlaying,
}: InfoCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isAbove = location.popUpLocation === "above";

  useEffect(() => {
    if (
      location.content?.videoUrl &&
      location.content.videoUrl.includes("vimeo.com") &&
      iframeRef.current
    ) {
      const player = new Player(iframeRef.current);
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      player.on("play", handlePlay);
      player.on("pause", handlePause);
      // Clean up
      return () => {
        player.off("play", handlePlay);
        player.off("pause", handlePause);
        player.unload();
      };
    } else {
      setIsPlaying(false);
    }
  }, [location.content?.videoUrl]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex flex-col items-center p-3 pointer-events-auto pt-3"
      style={{
        transform: isAbove ? "translateY(-16px)" : "none",
        filter: "drop-shadow(0 0 6px rgba(0, 0, 0, 0.13))",
      }}
    >
      <div className="relative bg-white rounded-[20px] shadow-lg p-3 w-[225px]">
        {/* triangle pointer for cards below markers */}
        {!isAbove && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] z-[1]">
            <div className="w-4 h-4 bg-white transform rotate-45 shadow-lg" />
          </div>
        )}

        {/* Content */}
        <div className="relative z-[2]">
          {/* Media Content */}
          {location.content?.videoUrl ? (
            <div className="aspect-video w-full mb-3 overflow-hidden rounded-sm">
              <div className="relative w-full h-full">
                <iframe
                  ref={
                    location.content?.videoUrl &&
                    location.content.videoUrl.includes("vimeo.com")
                      ? iframeRef
                      : undefined
                  }
                  src={`${location.content.videoUrl}?background=0&quality=360p&dnt=1`}
                  className="w-full h-full transition-opacity duration-500"
                  style={{ opacity: iframeLoaded ? 1 : 0 }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title={location.content.title}
                  nonce={`${Math.random()}`}
                  onLoad={() => setIframeLoaded(true)}
                />
                {location.content.videoThumbnail && (
                  <img
                    src={location.content.videoThumbnail}
                    alt={location.content.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{
                      opacity: iframeLoaded ? 0 : 1,
                      visibility: iframeLoaded ? "hidden" : "visible",
                      transition: "opacity 500ms, visibility 0s 500ms",
                    }}
                    loading="eager"
                  />
                )}
              </div>
            </div>
          ) : location.content?.image ? (
            <div className="relative w-full h-[165px] mb-3 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={location.content.image}
                alt={location.content.title}
                className="absolute inset-0 w-full h-[165px] object-contain object-center"
                loading="eager"
              />
            </div>
          ) : null}

          {/* Text Content */}
          <div className="space-y-1 mb-3">
            <h2 className="text-lg font-bold text-[#161e44] uppercase">
              {location.content?.title}
            </h2>
            <p className="text-base text-[#161e44]">
              {location.content?.subtitle}
            </p>
          </div>

          {/* Learn More Button */}
          {location.content?.learnMoreUrl && (
            <a
              href={location.content?.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#161e44] text-white text-center py-2 rounded-lg text-base font-semibold hover:bg-[#1f2857] transition-colors"
            >
              Learn More
            </a>
          )}
        </div>

        {/* triangle pointer for cards above markers */}
        {isAbove && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-[50%] z-[1]">
            <div className="w-4 h-4 bg-white transform rotate-[225deg] shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
