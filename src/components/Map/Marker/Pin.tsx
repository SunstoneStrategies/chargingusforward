import React from "react";

export default function Pin() {
  return (
    <g transform="translate(-12, -24) scale(1.2)">
      <path
        d="M12 24.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 14.7z"
        fill="#fcbc0c"
        stroke="white"
        strokeWidth="1"
      />
      <circle cx="12" cy="10" r="4" fill="#fcbc0c" />
      <circle cx="12" cy="10" r="2" fill="white" />
    </g>
  );
}
