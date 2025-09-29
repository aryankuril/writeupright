"use client";
import React, { useState, useEffect } from "react";
import AnimatedButton from "./button";
import { motion, AnimatePresence } from "framer-motion";

const FirstSection = () => {
  const sentence =
    "Everything your business needs to get online and get noticed.";
  const words = sentence.split(" ");

const rotatingWords = ["Social Media", "Websites", "Ads", "Designing"];
  const [index, setIndex] = useState(0);
  const [showRotating, setShowRotating] = useState(false); // 🔑 control span start

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const images = [
    "/images/section1-img1.png",
    "/images/section1-img2.png",
    "/images/section1-img3.png",
    "/images/section1-img4.png",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  // 🔑 sentence animation
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
const child = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }, // ✅ cast as const
  },
};


  // 🔑 rotating letters animation
  const letterVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };
  const containerVariants = {
    animate: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 text-center md:text-left">
<motion.h1
  className="text-[35px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[65px]
             leading-[1.05] lg:leading-[1] font-bold text-[#1D1D1D]
             tracking-tight w-full max-w-[650px] mx-auto md:mx-0
             flex flex-wrap lg:gap-x-1 uppercase"
  variants={container}
  initial="hidden"
  animate="visible"
  onAnimationComplete={() => setShowRotating(true)}
>
  {words.map((word, i) => (
    <motion.span key={i} variants={child} className="inline-block lg:mr-3 mr-1">
    {word}{" "}
  </motion.span>
  ))}

  {/* Rotating word */}
  <span className="relative flex h-[1em]"> {/* flex removes extra inline space */}
    {showRotating && (
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          className="absolute left-0 top-0 flex"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {rotatingWords[index].split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    )}
  </span>
</motion.h1>

<br />
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                     w-full max-w-[1000px]  font-bold
                     text-[#1D1D1D] leading-[1.05] lg:leading-[1]
                     mx-auto md:mx-0 mt-2 break-words uppercase"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          From professional websites to content that ranks on Google, we’ve got your
          back.
        </motion.p>

        <AnimatedButton
          text="Get a free Quote"
          href="/profile"
          className="mt-4 bg-[#0a253b] border-2 border-white text-white"
        />
      </div>

      {/* Right side images unchanged */}
      <div className="flex-1 w-full max-w-[600px] relative">
        <div className="aspect-[4/3] relative rounded-[20px] sm:rounded-[30px] overflow-hidden">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
                idx === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
