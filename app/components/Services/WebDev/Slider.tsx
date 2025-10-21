"use client";

import { useMemo } from "react";
import "./GallerySection.css";
// import "/Aryan IT/writeupright/app/components/GallerySection.css";

const galleryImages = [
  { src: "/images/cnt-1.webp", alt: "Image 1" },
  { src: "/images/cnt-2.webp", alt: "Image 2" },
  { src: "/images/cnt-3.webp", alt: "Image 3" },
  { src: "/images/cnt-4.webp", alt: "Image 4" },
  { src: "/images/cnt-5.webp", alt: "Image 5" },
  { src: "/images/cnt-6.webp", alt: "Image 6" },
  { src: "/images/slider9.webp", alt: "Image 9" },
  { src: "/images/slider10.webp", alt: "Image 10" },
];

const serviceImages = [
  { src: "/images/slider1.webp", alt: "Image 1" },
  { src: "/images/slider2.webp", alt: "Image 2" },
  { src: "/images/slider3.webp", alt: "Image 3" },
  { src: "/images/slider4.webp", alt: "Image 4" },
  { src: "/images/slider5.webp", alt: "Image 5" },
  { src: "/images/slider6.webp", alt: "Image 6" },
  { src: "/images/slider7.webp", alt: "Image 7" },
  { src: "/images/slider8.webp", alt: "Image 8" },
];

function MarqueeRow({
  images,
  speed = 10,
  direction = "left",
  showCaption = false,
}: {
  images: { src: string; alt: string; caption?: string }[];
  speed?: number;
  direction?: "left" | "right";
  showCaption?: boolean;
}) {
  const doubled = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="container marquee-outer">
      <div
        className={`marquee ${
          direction === "right" ? "marquee-right" : "marquee-left"
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="marquee-item w-[220px] sm:w-[260px] md:w-[300px] text-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
            />
            {showCaption && (
              <p className="mt-2 text-sm sm:text-base font-medium text-gray-800">
                {img.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Slider() {
  return (
    <section className=" py-10 sm:py-15 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        {/* ✅ Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
          Our Creative Work Showcase
        </h2>

        {/* Row 1 - scrolls left */}
        <MarqueeRow images={galleryImages} speed={25} direction="left" />

        {/* Row 2 - scrolls right with captions */}
        <MarqueeRow images={serviceImages} speed={30} direction="right" showCaption />
      </div>
    </section>
  );
}
