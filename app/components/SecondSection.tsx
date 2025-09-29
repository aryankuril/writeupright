"use client";
import React from "react";
import { motion, easeOut } from "framer-motion";
import AnimatedButton from "./button";

const processSteps = [
  { image: "/images/img1.webp" },
  { image: "/images/img2.webp" },
  { image: "/images/img3.webp" },
  { image: "/images/img4.webp" },
];

// Animation variants
const fadeFromRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const SecondSection: React.FC = () => {
  return (
    <section className="container py-10 sm:py-15 lg:py-20 max-w-7xl mx-auto">
      <div className="space-y-6">
        {/* Row 1 – comes from right */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeFromRight}
        >
          {/* Left (bigger) */}
          <div className="col-span-1 md:col-span-3 relative h-[220px] sm:h-[300px] md:h-[400px] rounded-[20px] overflow-hidden">
            <img
              src={processSteps[1].image}
              alt="Step 1"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          {/* Right (smaller) */}
          <div className="col-span-1 md:col-span-2 relative h-[220px] sm:h-[300px] md:h-[400px] rounded-[20px] overflow-hidden">
            <img
              src={processSteps[0].image}
              alt="Step 2"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
        </motion.div>

        {/* Row 2 – comes from left */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeFromLeft}
        >
          {/* Left (smaller) */}
          <div className="col-span-1 md:col-span-2 relative h-[220px] sm:h-[300px] md:h-[370px] rounded-[20px] overflow-hidden">
            <img
              src={processSteps[3].image}
              alt="Step 3"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>

          {/* Right (bigger) */}
          <div className="col-span-1 md:col-span-3 relative h-[220px] sm:h-[300px] md:h-[370px] rounded-[20px] overflow-hidden">
            <img
              src={processSteps[2].image}
              alt="Step 4"
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </div>
        </motion.div>

        {/* Button below cards */}
        <motion.div
          className="pt-3 flex justify-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <AnimatedButton
            text="Explore More"
            href="/allservices"
            className="bg-[#0a253b] border-2 border-white text-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SecondSection;
