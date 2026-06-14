import { Pause, Play } from "lucide-react";

type VideoOverlayProps = {
  isPlaying: boolean;
  showStatusIcon: boolean;
};

export default function VideoOverlay({
  isPlaying,
  showStatusIcon,
}: VideoOverlayProps) {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div
        className={`pointer-events-none absolute left-1/2 top-1/2 z-40 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition duration-300 ${
          showStatusIcon ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {isPlaying ? <Pause size={42} /> : <Play size={42} />}
      </div>
    </>
  );
}
