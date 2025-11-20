"use client";
import AnimatedButton from "./button";
import React from "react";
import { motion } from "framer-motion";

const SixthSection = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10 sm:py-15 lg:py-20 relative">
      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-16 gap-6 border border-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Left Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Ready to work with us ?
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <AnimatedButton
            text="Speak With a Real Expert"
            href="/contactus"
            className="mt-4 bg-[#0a253b]  text-white"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SixthSection;
