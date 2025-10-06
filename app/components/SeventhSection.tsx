"use client";
import AnimatedButton from "./button";
import React from "react";
import { motion } from "framer-motion";

const SeventhSection = () => {
  return (
<div className="container max-w-7xl mx-auto py-10 sm:py-15 lg:py-20 flex flex-col lg:gap-10 gap-5">
  {/* Each motion.div card */}
  <motion.div
    className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <video
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/images/card-bg.mp4" type="video/mp4" />
    </video>
    <motion.h2
      className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      Retail & Ecommerce
    </motion.h2>
  </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Travel, Hospitality & Leisure
        </motion.h2>
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          B2B & Professional Services
        </motion.h2>
      </motion.div>


      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Finance, Insurance & Real Estate
        </motion.h2>
      </motion.div>


      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
         Health, Wellness & Education
        </motion.h2>
      </motion.div>


      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Technology, Media & Telecom
        </motion.h2>
      </motion.div>


      <motion.div
        className="relative overflow-hidden rounded-2xl flex flex-col justify-center items-center px-6 md:px-12 py-10 md:py-25 gap-6 border border-gray-300 text-center"
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
          <source src="/images/card-bg.mp4" type="video/mp4" />
        </video>

        {/* Centered Text */}
        <motion.h2
          className="text-black text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Energy, Industrial & Public Sector
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default SeventhSection;
