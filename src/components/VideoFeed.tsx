import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export default function VideoFeed() {
  return (
    <main className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-black no-scrollbar">
      <div className="mx-auto h-full w-full max-w-[480px] lg:max-w-[430px]">
        {videos.map((video) => {
          return <VideoCard key={video.id} video={video} />;
        })}
      </div>
    </main>
  );
}
