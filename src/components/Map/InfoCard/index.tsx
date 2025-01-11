import React, { useState } from "react";
import { Location } from "../../../data/locations";

interface InfoCardProps {
  location: Location;
}

export default function InfoCard({ location }: InfoCardProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const isAbove = location.popUpLocation === "above";

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative flex flex-col items-center p-3 pointer-events-auto"
    >
      <div className="relative bg-white rounded-[20px] shadow-lg p-3 w-[240px] z-[1000]">
        {/* triangle pointer */}
        {!isAbove && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%]">
            <div className="w-4 h-4 bg-white transform rotate-45 shadow-lg" />
          </div>
        )}

        {/* Media Content */}
        {location.content?.videoUrl ? (
          <div className="aspect-video w-full mb-3 overflow-hidden">
            <div className="relative w-full h-full">
              <iframe
                src={`${location.content.videoUrl}?background=0&quality=360p`}
                className={`w-full h-full transition-opacity duration-300 ${
                  iframeLoaded ? "opacity-100" : "opacity-0"
                }`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={location.content.title}
                onLoad={() => setIframeLoaded(true)}
              />
              {location.content.videoThumbnail && (
                <img
                  src={location.content.videoThumbnail}
                  alt={location.content.title}
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
                    iframeLoaded ? "opacity-0" : "opacity-100"
                  }`}
                  loading="eager"
                />
              )}
            </div>
          </div>
        ) : location.content?.image ? (
          <div className="relative w-full pb-[56.25%] mb-3 rounded-lg overflow-hidden">
            <img
              src={location.content.image}
              alt={location.content.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
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
        <a
          href={location.content?.learnMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#161e44] text-white text-center py-2 rounded-lg text-base font-semibold hover:bg-[#1f2857] transition-colors"
        >
          Learn More
        </a>
        {/* triangle pointer */}
        {isAbove && (
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-[50%]">
            <div className="w-4 h-4 bg-white transform rotate-[225deg] shadow-lg" />
          </div>
        )}
      </div>
    </div>
  );
}