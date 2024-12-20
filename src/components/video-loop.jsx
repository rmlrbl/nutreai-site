// src/components/video-loop.jsx
"use client";

import React, { useEffect, useRef, useState, useId, useCallback } from "react";
import { Play, Pause } from "lucide-react";
import { useVideo } from "@/contexts/VideoContext";

export function VideoLoop({ src, className }) {
  const videoId = useId();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { activeVideoId, setActiveVideoId } = useVideo();

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      if (activeVideoId && activeVideoId !== videoId) {
        setActiveVideoId(null);
      }
      videoRef.current.play();
      setIsPlaying(true);
      setActiveVideoId(videoId);
    }
  }, [activeVideoId, videoId, setActiveVideoId]);

  const pauseVideo = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsPlaying(false);
      if (activeVideoId === videoId) {
        setActiveVideoId(null);
      }
    }
  }, [activeVideoId, videoId, setActiveVideoId]);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        pauseVideo();
      } else {
        playVideo();
      }
    }
  }, [isPlaying, pauseVideo, playVideo]);

  // Effect para gerenciar reprodução baseado na visibilidade
  useEffect(() => {
    if (
      isVisible &&
      !isPlaying &&
      (!activeVideoId || activeVideoId === videoId)
    ) {
      playVideo();
    } else if (!isVisible && isPlaying) {
      pauseVideo();
    }
  }, [isVisible, isPlaying, activeVideoId, videoId, playVideo, pauseVideo]);

  // Effect para parar quando outro vídeo começa
  useEffect(() => {
    if (activeVideoId && activeVideoId !== videoId && isPlaying) {
      pauseVideo();
    }
  }, [activeVideoId, videoId, isPlaying, pauseVideo]);

  // Configurar Intersection Observer
  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  // Event listener para loop do vídeo
  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      if (videoElement) {
        videoElement.currentTime = 0;
        if (isVisible && (!activeVideoId || activeVideoId === videoId)) {
          playVideo();
        }
      }
    };

    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [isVisible, activeVideoId, videoId, playVideo]);

  return (
    <div ref={containerRef} className="relative group">
      <video ref={videoRef} muted playsInline className={className}>
        <source src={src} type="video/mp4" />
      </video>

      <button
        onClick={handlePlayPause}
        className={`absolute inset-0 m-auto w-16 h-16 flex items-center justify-center 
          rounded-full bg-black/50 hover:bg-black/70 transition-opacity duration-300
          ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
        `}
        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
      >
        {isPlaying ? (
          <Pause className="w-8 h-8 text-white" />
        ) : (
          <Play className="w-8 h-8 text-white ml-1" />
        )}
      </button>
    </div>
  );
}
