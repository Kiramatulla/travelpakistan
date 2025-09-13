// components/WebStoryCard.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

// Global tracker so only one reel plays at a time
let currentPlayingVideo = null;

export default function WebStoryCard({ slide }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      currentPlayingVideo = null;
    } else {
      if (currentPlayingVideo && currentPlayingVideo !== videoRef.current) {
        currentPlayingVideo.pause();
      }
      videoRef.current.play();
      setIsPlaying(true);
      currentPlayingVideo = videoRef.current;
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="relative min-w-[180px] max-w-[160px] h-[270px] md:min-w-[200px] md:max-w-[205px] md:h-[285px] snap-start rounded-xl overflow-hidden shadow-md bg-black">
      {slide?.videoFile ? (
        <video
          ref={videoRef}
          src={slide.videoFile}
          poster={slide?.poster?.asset?.url}
          loop
          playsInline
          muted={isMuted}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-white">
          No video
        </div>
      )}

      {/* Overlay text */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
        {slide?.heading && (
          <p className="text-xs text-gray-200">{slide.heading}</p>
        )}
      </div>

      {/* Play/Pause */}
      <button
        onClick={togglePlay}
        className="absolute left-2 top-2 bg-black/60 text-white p-2 rounded-full"
      >
        {!isMounted ? (
          <FaPlay size={16} /> // Avoid hydration mismatch
        ) : isPlaying ? (
          <FaPause size={16} />
        ) : (
          <FaPlay size={16} />
        )}
      </button>

      {/* Mute/Unmute */}
      <button
        onClick={toggleMute}
        className="absolute right-2 top-2 bg-black/60 text-white p-2 rounded-full"
      >
        {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
      </button>
    </div>
  );
}
