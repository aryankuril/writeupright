"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business objectives, target audience, and project scope to create a strategic roadmap.",
  },
  {
    id: "02",
    title: "Design and Development",
    description:
      "Our designers and developers collaborate to turn ideas into functional, visually appealing solutions.",
  },
  {
    id: "03",
    title: "Full-cycle Testing",
    description:
      "Every component is rigorously tested to ensure quality, stability, and flawless performance across platforms.",
  },
  {
    id: "04",
    title: "Implementation",
    description:
      "Your solution is deployed securely and seamlessly, ensuring optimal integration with existing systems.",
  },
  {
    id: "05",
    title: "Maintenance",
    description:
      "Once live, we monitor performance and continuously improve your solution with user feedback and updates.",
  },
];

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(4); // default = Maintenance
  const active = steps[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-10 overflow-hidden">
      {/* LEFT CONTENT (SLIDER) */}
      <div className="md:w-1/2 space-y-6 relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0"
          >
            <div className="text-[5rem] font-bold text-white leading-none">
              {active.id}.
            </div>
            <h2 className="text-4xl font-semibold mb-4">{active.title}</h2>
            <p className="text-gray-400 text-lg max-w-lg">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Pagination and Arrows */}
        <div className="absolute bottom-[-70px] flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#9D00FF] hover:text-[#9D00FF] transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-[#9D00FF] hover:text-[#9D00FF] transition-all"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex items-center gap-2 ml-25">
            {steps.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={clsx(
                  "w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300",
                  i === activeIndex
                    ? "bg-[#9D00FF] w-6"
                    : "bg-gray-600 hover:bg-gray-400"
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT 3D STACK */}
      <div
        className="relative md:w-1/2 flex justify-center items-center mb-70 "
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {steps.map((step, index) => {
          const isActive = active.id === step.id;
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.id}
              onMouseEnter={() => setActiveIndex(index)}
              className="group absolute flex items-center justify-between w-[380px] md:w-[280px]"
              style={{
                transform: `
                  rotateX(58deg)
                  translateY(${index * 60}px)
                  translateZ(${index * -60}px)
                `,
                transition: "all 0.6s ease",
                zIndex: steps.length - index,
              }}
            >
              {/* Layer Block */}
              <div
                className={clsx(
                  "h-[60px] md:h-[80px] rounded-xl transition-all duration-500 shadow-xl w-full",
                  isActive
                    ? "bg-[#9D00FF] scale-105 shadow-[0_0_35px_rgba(157,0,255,0.7)]"
                    : "bg-[#242424]"
                )}
              ></div>

              {/* Outside Title (Flat, with dashed connector) */}
              <div
                className={clsx(
                  "absolute flex items-center gap-3 text-sm md:text-base font-medium whitespace-nowrap px-5 py-2 transition-all duration-500 rounded-full",
                  isActive
                    ? "bg-[#9D00FF] text-white"
                    : "bg-[#121212] text-gray-300"
                )}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  [isEven ? "left" : "right"]: "calc(100% + 30px)",
                }}
              >
                {step.id}. {step.title}
                <span
                  className={clsx(
                    "absolute border-dashed border-t w-8",
                    isEven ? "left-[-30px]" : "right-[-30px]",
                    isActive ? "border-[#9D00FF]" : "border-gray-500"
                  )}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
