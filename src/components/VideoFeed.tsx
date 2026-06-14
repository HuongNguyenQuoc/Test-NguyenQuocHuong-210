"use client";

import { useCallback, useState } from "react";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function VideoFeed() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMuted = useCallback(() => {
    setIsMuted((currentValue) => !currentValue);
  }, []);

  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black no-scrollbar">
      <div className="mx-auto h-full w-full max-w-[480px] lg:max-w-[430px]">
        {videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
              isMuted={isMuted}
              onToggleMuted={toggleMuted}
            />
          );
        })}
      </div>
    </main>
  );
}
