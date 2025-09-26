"use client";

import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./GallerySection.css";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/images/slider1.webp", alt: "  Image 1", caption: "Team Workshop" },
  { src: "/images/slider2.webp", alt: " Image 2", caption: "Web Design Training" },
  { src: "/images/slider3.webp", alt: "  Image 3", caption: "Social Media Seminar" },
  { src: "/images/slider4.webp", alt: "Image 4", caption: "Marketing Strategies" },
  { src: "/images/slider5.webp", alt: " Image 5", caption: "Coding Bootcamp" },
  { src: "/images/slider6.webp", alt: "Image 6", caption: "Digital Advertising" },
  { src: "/images/slider7.webp", alt: " Image 7", caption: "Creative Workshop" },
  { src: "/images/slider8.webp", alt: " Image 8", caption: "Content Creation" },
  { src: "/images/slider9.webp", alt: "Image 9", caption: "SEO Training" },
  { src: "/images/slider10.webp", alt: " Image 10", caption: "Analytics Workshop" },
];


const GallerySection = () => {
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
    <section className="gallery-section">
      <div className="gallery-container">
<div className="gallery-header">
  <div>
    <motion.h2
      className="gallery-description"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // animate when 30% in view
    >
      {"Our Training Gallery".split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>

    <motion.p
      className="gallery-title"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {"Our Service Offerings".split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  </div>

  <motion.div
    className="gallery-right-text"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
    Discover our wide range of services and training sessions designed to boost your skills.
  </motion.div>
</div>



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
  );
};

export default GallerySection;
