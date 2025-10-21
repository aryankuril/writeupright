"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ForthSection = () => {
      // 👉 Separate counts for each card
      const [counts, setCounts] = useState([0, 0, 0]);
    
      const sectionRef = useRef<HTMLElement | null>(null);
    
      // 👉 Different target numbers for each card
      const targetNumbers = [920, 450, 1200];
      const duration = 2000; // animation duration
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                startCountAnimations();
                observer.disconnect(); // run only once
              }
            });
          },
          { threshold: 0.5 }
        );
    
        if (sectionRef.current) observer.observe(sectionRef.current);
    
        return () => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const startCountAnimations = () => {
        let start: number | null = null;
    
        const animate = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
    
          setCounts((prev) =>
            prev.map((_, i) =>
              Math.min(
                Math.floor((progress / duration) * targetNumbers[i]),
                targetNumbers[i]
              )
            )
          );
    
          if (progress < duration) requestAnimationFrame(animate);
        };
    
        requestAnimationFrame(animate);
      };
    
      const cards = [
        {
          id: 1,
          text: "we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world.",
        },
        {
          id: 2,
          text: "our creative strategies and expert execution have helped hundreds of brands grow online and reach new audiences.",
        },
        {
          id: 3,
          text: "we combine data-driven insights with cutting-edge tools to deliver measurable results for our clients.",
        },
      ];
    
  return (
    <section
      ref={sectionRef}
      className="container mx-auto max-w-7xl flex flex-col gap-10 py-10 lg:py-20 px-5"
    >
      {/* Heading */}
      <div className="container w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 md:items-center text-left">
        <motion.p
          className="flex-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010205] font-semibold leading-[100%] tracking-[-1.44px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Design and web solution
        </motion.p>

        <motion.div
          className="flex-1 text-[15px] sm:text-[16px] text-[#878C91] flex justify-end mt-2 lg:mt-4 font-medium leading-[180%] max-w-1xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Collaborating with Visionaries Across Industries for <br /> Innovative Solutions.
        </motion.div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[438px] 
                       h-60 sm:h-72 md:h-80 rounded-2xl p-6 sm:p-8 
                       flex flex-col justify-between overflow-hidden 
                       border border-black  mx-auto 
                       bg-white text-black hover:bg-[#0a253b] hover:text-white 
                       transition-colors duration-300"
          >
            <div className="relative z-10">
              <span className="text-[84px] sm:text-5xl md:text-8xl font-bold leading-none">
                {counts[i]}
                <span>+</span>
              </span>
            </div>

            <div className="relative z-10 flex items-center gap-2 mt-4 flex-wrap">
              <p>{card.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ForthSection