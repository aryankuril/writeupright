"use client";

import { useMemo } from "react";
import "./GallerySection.css";

const videoSources = [
  { src: "/videos/slider1.mp4", alt: "Video 1" },
  { src: "/videos/slider2.mp4", alt: "Video 2" },
  { src: "/videos/slider3.mp4", alt: "Video 3" },
  { src: "/videos/slider4.mp4", alt: "Video 4" },
  { src: "/videos/slider5.mp4", alt: "Video 5" },
  { src: "/videos/slider1.mp4", alt: "Video 6" },
];

function VerticalMarquee({
  videos,
  speed = 40,
  direction = "down",
}: {
  videos: { src: string; alt: string }[];
  speed?: number;
  direction?: "up" | "down";
}) {
  const doubled = useMemo(() => [...videos, ...videos], [videos]);

  return (
    <div className="relative overflow-hidden h-[90vh] w-[260px]  rounded-2xl">
      <div
        className={`flex flex-col animate-vertical-marquee ${
          direction === "up" ? "reverse" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((vid, i) => (
          <div
            key={i}
            className="mb-4 rounded-2xl overflow-hidden shadow-md"
          >
            <video
              src={vid.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[480px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const FifthSection = () => {
  return (
    <section className=" py-10 sm:py-15 lg:py-20 overflow-hidden bg-[#0a253b]">
      <div className="max-w-7xl mx-auto text-center">
        {/* <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Our Creative Work Showcase
        </h2> */}

        <div className=" flex justify-end lg:gap-6 gap-2 px-2">
          {/* Column 1 - scroll down */}
          <VerticalMarquee videos={videoSources} speed={50} direction="down" />

          {/* Column 2 - scroll up */}
          <VerticalMarquee videos={videoSources} speed={45} direction="up" />

          {/* Column 3 - scroll down */}
          <VerticalMarquee videos={videoSources} speed={55} direction="down" />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
