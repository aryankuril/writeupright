"use client";
import React from "react";
import AnimatedTextButton from "../../button";
import { motion } from "framer-motion";

const FirstSection = () => {
  const sentence =
    "Everything your business needs to get online and get noticed.";
  const words = sentence.split(" ");

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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left text section */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] xl:text-[65px]
             leading-[1.05] lg:leading-[1]  text-[#1D1D1D]
             tracking-tight w-full max-w-[650px] mx-auto md:mx-0
             flex flex-wrap lg:gap-x-1 uppercase"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span key={i} variants={child} className="inline-block lg:mr-3 mr-1">
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <br />
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                     w-full max-w-[1000px] font-bold
                     text-[#1D1D1D] leading-[1.05] lg:leading-[1]
                     mx-auto md:mx-0 mt-2 break-words uppercase"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          From professional websites to content that ranks on Google, we’ve got your back.
        </motion.p>

        <AnimatedTextButton
          text="Get a free Quote"
          href="/contactus"
          className="mt-4 bg-[#0a253b] border-2 border-white text-white"
        />
      </div>

      {/* Right static image */}
      <div className="flex-1 w-full max-w-[600px] relative">
        <div className="aspect-[4/3] relative rounded-[20px] sm:rounded-[30px] overflow-hidden">
          <img
            src="/images/section1-img1.png" // only one image
            alt="Section 1 Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
