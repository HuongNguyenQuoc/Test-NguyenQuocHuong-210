"use client";

import { useCallback, useState } from "react";

export function useLike(initialLikesCount: number) {
  const [{ isLiked, likesCount }, setLikeState] = useState(() => ({
    isLiked: false,
    likesCount: initialLikesCount,
  }));

  const toggleLike = useCallback(() => {
    setLikeState((currentState) => {
      const nextIsLiked = !currentState.isLiked;

      return {
        isLiked: nextIsLiked,
        likesCount: currentState.likesCount + (nextIsLiked ? 1 : -1),
      };
    });
  }, []);

  return {
    isLiked,
    likesCount,
    toggleLike,
  };
}
