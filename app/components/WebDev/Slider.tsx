"use client";

import { useEffect, useRef } from "react";
import "../GallerySection.css";

const galleryImages = [
  { src: "/images/cnt-1.webp", alt: "Image 1" },
  { src: "/images/cnt-2.webp", alt: "Image 2" },
  { src: "/images/cnt-3.webp", alt: "Image 3" },
  { src: "/images/cnt-4.webp", alt: "Image 4" },
  { src: "/images/cnt-5.webp", alt: "Image 5" },
  { src: "/images/cnt-6.webp", alt: "Image 6" },
];

export default function Slider() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;

    if (!row1 || !row2) return;

    let pos1 = 0;
    let pos2 = 0;

    const animate = () => {
      pos1 -= 0.5; // row1 moves left
      pos2 += 0.5; // row2 moves right

      row1.style.transform = `translateX(${pos1}px)`;
      row2.style.transform = `translateX(${pos2}px)`;

      const halfWidth1 = row1.scrollWidth / 2;
      const halfWidth2 = row2.scrollWidth / 2;

      // Reset when one full set has scrolled
      if (Math.abs(pos1) >= halfWidth1) pos1 = 0;
      if (Math.abs(pos2) >= halfWidth2) pos2 = 0;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* FIRST ROW (moves left) */}
        <div className="overflow-hidden whitespace-nowrap mb-10">
          <div
            ref={row1Ref}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={`row1-${i}`}
                className="w-[200px] sm:w-[250px] md:w-[300px] flex-shrink-0"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECOND ROW (moves right) */}
        <div className="overflow-hidden whitespace-nowrap">
          <div
            ref={row2Ref}
            className="flex gap-6 will-change-transform"
            style={{ width: "max-content" }}
          >
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={`row2-${i}`}
                className="w-[200px] sm:w-[250px] md:w-[300px] flex-shrink-0"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
