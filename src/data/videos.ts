import type { VideoItem } from "@/types/video";

export const videos: VideoItem[] = [
  {
    id: "1",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    authorName: "Big Buck Bunny",
    description: "A sample video used to test the vertical video feed UI.",
    likesCount: 1280,
    commentsCount: 92,
    sharesCount: 31,
  },
  {
    id: "2",
    videoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4",
    authorName: "MDN Video",
    description: "Auto play and pause video using Intersection Observer API.",
    likesCount: 2450,
    commentsCount: 180,
    sharesCount: 76,
  },
  {
    id: "3",
    videoUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
    authorName: "Sintel Trailer",
    description:
      "Responsive full-screen vertical scroll layout with smooth snap.",
    likesCount: 3810,
    commentsCount: 245,
    sharesCount: 120,
  },
  {
    id: "4",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    authorName: "Demo Creator",
    description:
      "Click the video to play or pause like a real short video app.",
    likesCount: 970,
    commentsCount: 51,
    sharesCount: 14,
  },
];

// This is mock data. I just give 4 fake video objects and after that I also added commentsCount and sharesCount because they make the UI look more realistic.