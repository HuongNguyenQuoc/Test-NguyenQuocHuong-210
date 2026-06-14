"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { STATUS_ICON_DURATION_MS } from "@/constants/video";

export function useVideoStatusOverlay() {
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showStatusIcon, setShowStatusIcon] = useState(false);

  const flashStatusIcon = useCallback(() => {
    setShowStatusIcon(true);

    if (statusTimerRef.current) {
      clearTimeout(statusTimerRef.current);
    }

    statusTimerRef.current = setTimeout(() => {
      setShowStatusIcon(false);
    }, STATUS_ICON_DURATION_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (statusTimerRef.current) {
        clearTimeout(statusTimerRef.current);
      }
    };
  }, []);

  return {
    showStatusIcon,
    flashStatusIcon,
  };
}
