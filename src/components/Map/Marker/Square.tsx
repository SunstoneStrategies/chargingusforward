import React from "react";

export default function Square() {
  return (
    <g transform="translate(-12, -12)">
      <rect
        width="24"
        height="24"
        fill="#fcbc0c"
        stroke="white"
        strokeWidth="1"
        rx="4"
      />
      <circle cx="12" cy="12" r="4" fill="white" />
    </g>
  );
}
