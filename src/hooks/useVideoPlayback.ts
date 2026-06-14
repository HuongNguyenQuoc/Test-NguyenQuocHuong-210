"use client";

import { useCallback, useRef, useState } from "react";

export function useVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = useCallback(async () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    try {
      await videoElement.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const pauseVideo = useCallback(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    videoElement.pause();
    setIsPlaying(false);
  }, []);

  const togglePlayback = useCallback(async () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      await playVideo();
      return;
    }

    pauseVideo();
  }, [pauseVideo, playVideo]);

  const markPlaying = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const markPaused = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return {
    videoRef,
    isPlaying,
    playVideo,
    pauseVideo,
    togglePlayback,
    markPlaying,
    markPaused,
  };
}
