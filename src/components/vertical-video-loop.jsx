// src/components/vertical-video-loop.jsx
"use client";

import React from "react";

export function VerticalVideoLoop() {
  return (
    <div className="w-full h-full rounded-[32px] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-contain"
      >
        <source src="/videos/main-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
