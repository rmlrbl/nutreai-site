"use client";

import React from "react";

export function VideoLoop({ src, className }) {
  return (
    <video autoPlay muted loop playsInline className={className}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
