"use client";

import { Heart, MessageCircle, Share2 } from "lucide-react";

type ActionButtonProps = {
  isLiked: boolean;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  onToggleLike: () => void;
};

function formatCount(value: number) {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return String(value);
}

export default function ActionButtons({
  isLiked,
  likesCount,
  commentsCount,
  sharesCount,
  onToggleLike,
}: ActionButtonProps) {
  return (
    <div className="absolute bottom-28 right-4 z-30 flex flex-col items-center gap-5 sm:bottom-10 lg:bottom-8">
      <button
        type="button"
        onClick={onToggleLike}
        className="group flex flex-col items-center gap-1"
        aria-label="Like video"
      >
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur transition group-active:scale-90 ${
            isLiked ? "text-red-500" : "text-white"
          }`}
        >
          <Heart size={28} fill={isLiked ? "currentColor" : "none"} />
        </span>

        <span className="text-xs font-semibold text-white">
          {formatCount(likesCount)}
        </span>
      </button>

      <button
        type="button"
        className="group flex flex-col items-center gap-1"
        aria-label="Open comments"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition group-active:scale-90">
          <MessageCircle size={28} />
        </span>

        <span className="text-xs font-semibold text-white">
          {formatCount(commentsCount)}
        </span>
      </button>

      <button
        type="button"
        className="group flex flex-col items-center gap-1"
        aria-label="Share video"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur transition group-active:scale-90">
          <Share2 size={28} />
        </span>

        <span className="text-xs font-semibold text-white">
          {formatCount(sharesCount)}
        </span>
      </button>
    </div> 
  );
}
