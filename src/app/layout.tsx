import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Netviet Vertical Video Feed",
  description: "A TikTok-style vertical video feed built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}