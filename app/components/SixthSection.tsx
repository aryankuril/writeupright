"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const SixthSection = () => {
  return (
    <div className="container max-w-7xl mx-auto py-10 sm:py-15 lg:py-20">
      <motion.div
        className="w-full bg-[url('/images/card-bg.png')] bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-10 md:py-16 gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Text */}
        <motion.h2
          className="text-white text-[28px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-semibold leading-[130%] tracking-[-0.03em] text-center md:text-left"
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
          <Link href="/contact-us">
            <button
              className="flex items-center justify-center gap-6 sm:gap-[42px] bg-white text-[#010205] font-['Plus_Jakarta_Sans'] text-sm sm:text-[16px] font-bold leading-[140%] tracking-[-0.02em] px-6 sm:px-[32px] py-3 sm:py-[16px] rounded-full 
              transition-all duration-300 hover:bg-gray-200 hover:scale-105"
            >
              Get Started
              <span className="text-lg sm:text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SixthSection;
