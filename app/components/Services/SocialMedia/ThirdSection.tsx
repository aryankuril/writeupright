"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    src: "/images/card1.jpg",
    text: "Cozy Café Interiors",
  },
  {
    id: 2,
    src: "/images/card2.jpg",
    text: "Healthy Meals",
  },
  {
    id: 3,
    src: "/videos/card3.mp4", // slightly wider vertical video
    text: "Delicious Pancakes",
    isVideo: true,
    colSpan: "col-span-2 row-span-2", // wider now
  },
  {
    id: 4,
    src: "/videos/card4.mp4", // slightly wider horizontal video
    text: "Modern Kitchen",
    isVideo: true,
    colSpan: "col-span-2 row-span-2", // wider now
  },
  {
    id: 5,
    src: "/images/card5.png",
    text: "Chef at Work",
  },
  {
    id: 6,
    src: "/images/card6.jpeg",
    text: "Creative Setup",
  },
];

const ThirdSection = () => {
  return (
    <section className="container py-10 sm:py-15 lg:py-20">
      <div
        className="
          grid grid-cols-4 gap-3
          auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[400px]
        "
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative overflow-hidden rounded-xl group ${card.colSpan || ""}`}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {card.isVideo ? (
              <video
                src={card.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
    
            ) : (
              <Image
                src={card.src}
                alt={card.text}
                fill
                className="object-cover"
              />
            )}

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0 bg-black/50 opacity-0 
                flex items-center justify-center 
                text-white text-base sm:text-lg font-semibold
              
              "
            >
              {card.text}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
