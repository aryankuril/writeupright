"use client";

import React from "react";
import { motion } from "framer-motion";

const cardData = [
  "Retail & Ecommerce",
  "Travel, Hospitality & Leisure",
  "B2B & Professional Services",
  "Finance, Insurance & Real Estate",
  "Health, Wellness & Education",
  "Technology, Media & Telecom",
  "Energy, Industrial & Public Sector",
];

const SeventhSection = () => {
  return (
    <div className="container py-10 sm:py-15 lg:py-20">
      {/* Heading */}
      <motion.h2
        className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010205] font-semibold leading-[100%] tracking-[-1.44px] py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Industries We Empower
      </motion.h2>

      {/* Grid Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* First row - 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-6 gap-3 justify-items-center">
          {cardData.slice(0, 4).map((title, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-8 py-10 gap-6 border border-gray-300 text-center w-full will-change-transform"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                // loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source src="/images/card-bg.mp4" type="video/mp4" />
              </video>
              <h2 className="text-black text-[16px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-semibold leading-[130%] tracking-[-0.03em]">
                {title}
              </h2>
            </div>
          ))}
        </div>

        {/* Second row - 3 centered cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gap-6 gap-3 justify-center mt-6 md:mt-10 place-items-center">
          {cardData.slice(4).map((title, index) => (
            <div
              key={index + 4}
              className={`relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-8 py-10 gap-6 border border-gray-300 text-center w-full will-change-transform ${
                index === 2 ? "col-span-2 md:col-span-1 md:justify-self-center" : ""
              }`}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                // loading="lazy"
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
              >
                <source src="/images/card-bg.mp4" type="video/mp4" />
              </video>
              <h2 className="text-black text-[16px] sm:text-[14px] md:text-[18px] lg:text-[20px] font-semibold leading-[130%] tracking-[-0.03em]">
                {title}
              </h2>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SeventhSection;
