"use client";

import { useEffect } from "react";
import type { RefObject } from "react";
import { AUTO_PLAY_THRESHOLD } from "@/constants/video";

type UseAutoPlayOnViewOptions = {
  containerRef: RefObject<Element | null>;
  onEnter: () => void | Promise<void>;
  onLeave: () => void;
  threshold?: number;
};

export function useAutoPlayOnView({
  containerRef,
  onEnter,
  onLeave,
  threshold = AUTO_PLAY_THRESHOLD,
}: UseAutoPlayOnViewOptions) {
  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          void onEnter();
          return;
        }

        onLeave();
      },
      {
        threshold: [0, threshold, 1],
      },
    );

    observer.observe(containerElement);

    return () => {
      observer.unobserve(containerElement);
      observer.disconnect();
    };
  }, [containerRef, onEnter, onLeave, threshold]);
}
