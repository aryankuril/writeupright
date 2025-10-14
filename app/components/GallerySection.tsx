"use client";

import { useEffect, useRef } from "react";


const galleryImages = [
  { src: "/images/cnt-1.webp", alt: "Image 1" },
  { src: "/images/cnt-2.webp", alt: "Image 2" },
  { src: "/images/cnt-3.webp", alt: "Image 3" },
  { src: "/images/cnt-4.webp", alt: "Image 4" },
  { src: "/images/cnt-5.webp", alt: "Image 5" },
  { src: "/images/cnt-6.webp", alt: "Image 6" },
];

const serviceImages = [
  { src: "/images/slider1.webp", alt: "Image 1", caption: "Website Development" },
  { src: "/images/slider2.webp", alt: "Image 2", caption: "Application Development" },
  { src: "/images/slider3.webp", alt: "Image 3", caption: "SaaS Development" },
  { src: "/images/slider4.webp", alt: "Image 4", caption: "UI/UX" },
  { src: "/images/slider5.webp", alt: "Image 5", caption: "SEO" },
  { src: "/images/slider6.webp", alt: "Image 6", caption: "GEO/AI SEO" },
  { src: "/images/slider7.webp", alt: "Image 7", caption: "Pay Per Click Marketing" },
  { src: "/images/slider8.webp", alt: "Image 8", caption: "Meta Ads" },
  { src: "/images/slider9.webp", alt: "Image 9", caption: "Google Ads" },
  { src: "/images/slider10.webp", alt: "Image 10", caption: "Programmatic Advertising" },
  { src: "/images/slider1.webp", alt: "Image 11", caption: "Social Media Management" },
  { src: "/images/slider2.webp", alt: "Image 12", caption: "Graphic Designing" },
];

function InfiniteRow({
  images,
  direction = "left",
  speed = 0.5,
  showCaption = false,
}: {
  images: { src: string; alt: string; caption?: string }[];
  direction?: "left" | "right";
  speed?: number;
  showCaption?: boolean;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let pos = 0;

    const animate = () => {
      pos += direction === "left" ? -speed : speed;
      row.style.transform = `translateX(${pos}px)`;

      const resetPoint = row.scrollWidth / 2;
      if (Math.abs(pos) >= resetPoint) pos = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, [direction, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        ref={rowRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className="w-[220px] sm:w-[260px] md:w-[300px] flex-shrink-0 text-center"
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
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Row 1 - left scroll */}
        <InfiniteRow images={galleryImages} direction="left" speed={0.6} />

        {/* Row 2 - right scroll with captions */}
        <InfiniteRow
          images={serviceImages}
          direction="right"
          speed={0.6}
          showCaption
        />
      </div>
    </section>
  );
}
