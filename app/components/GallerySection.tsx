"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../components/GallerySection.css";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/cnt-1.webp", alt: "  Image 1", caption: "Website Development" },
  { src: "/images/cnt-2.webp", alt: " Image 2", caption: "Application development" },
  { src: "/images/cnt-3.webp", alt: "  Image 3", caption: "Saas Development" },
  { src: "/images/cnt-4.webp", alt: "Image 4", caption: "UI/UX" },
  { src: "/images/cnt-5.webp", alt: " Image 5", caption: "SEO" },
  { src: "/images/cnt-6.webp", alt: "Image 6", caption: "GEO/AI SEO" },
  { src: "/images/cnt-1.webp", alt: " Image 7", caption: "Pay Per Click Marketing" },
  { src: "/images/cnt-2.webp", alt: " Image 8", caption: "Meta Ads" },
  { src: "/images/cnt-3.webp", alt: "Image 9", caption: "Google Ads" },
  { src: "/images/cnt-4.webp", alt: " Image 10", caption: "Programmatic Advertising" },
  { src: "/images/cnt-5.webp", alt: "  Image 1", caption: "Social Media Management" },
  { src: "/images/cnt-6.webp", alt: " Image 2", caption: "Graphic Designing" },
];


const ThirdSection = () => {
      const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
      });
    
      useEffect(() => {
        if (!emblaApi) return;
    
        const interval = setInterval(() => {
          emblaApi.scrollNext();
        }, 3000);
    
        return () => clearInterval(interval);
      }, [emblaApi]);
  return (
    <section className="gallery-section container py-10 sm:py-15 lg:py-20">
      <div className="gallery-container">

        <div className="gallery-carousel-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
{galleryImages.map((image, index) => (
  <div key={index} className="embla__slide"> {/* ✅ Added key here */}
    <div className="gallery-image-wrapper">
      <img
        src={image.src}
        alt={image.alt}
        className="gallery-image"
        loading="lazy"
      />
    </div>

    <motion.p
      className="gallery-image-caption"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {image.caption.split(" ").map((word, i) => (
        <motion.span
          key={i} // this is fine for the inner words
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  </div>
))}

            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ThirdSection