"use client";

import Image from "next/image";
import React from "react";
import AnimatedButton from "../../button";

const logos = [
  { src: "/images/clogo1.svg", alt: "Rosewood" },
  { src: "/images/clogo2.svg", alt: "Channel 5" },
  { src: "/images/clogo3.svg", alt: "Fortnum & Mason" },
  { src: "/images/clogo4.svg", alt: "Ten" },

    { src: "/images/clogo1.svg", alt: "Rosewood" },
  { src: "/images/clogo2.svg", alt: "Channel 5" },
  { src: "/images/clogo3.svg", alt: "Fortnum & Mason" },
  { src: "/images/clogo4.svg", alt: "Ten" },

    { src: "/images/clogo1.svg", alt: "Rosewood" },
  { src: "/images/clogo2.svg", alt: "Channel 5" },
  { src: "/images/clogo3.svg", alt: "Fortnum & Mason" },
  { src: "/images/clogo4.svg", alt: "Ten" },

    { src: "/images/clogo1.svg", alt: "Rosewood" },
  { src: "/images/clogo2.svg", alt: "Channel 5" },
  { src: "/images/clogo3.svg", alt: "Fortnum & Mason" },
  { src: "/images/clogo4.svg", alt: "Ten" },

    { src: "/images/clogo1.svg", alt: "Rosewood" },
  { src: "/images/clogo2.svg", alt: "Channel 5" },
  { src: "/images/clogo3.svg", alt: "Fortnum & Mason" },
  { src: "/images/clogo4.svg", alt: "Ten" },
];

const SecondSection = () => {
  return (
    <section className="container py-10 sm:py-15 lg:py-20">
      {/* HEADING */}
      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black mb-10">
        Making Global Brands Great On Social{" "}
        <span className="inline-block rotate-180">↓</span>
      </h2>

      {/* LOGO GRID */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-6 max-w-7xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-8"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={180}
              height={80}
              className="object-contain max-h-[60px] sm:max-h-[80px] w-auto invert brightness-100"
            />
          </div>
        ))}

        {/* Centered Button in 3rd Column */}
        <div className="col-span-4 md:col-span-5 flex justify-center mt-6">
          <div className="col-span-1 md:col-start-3 flex justify-center">
            <AnimatedButton
              text="Be One of Them"
              href="/contactus"
              className="bg-[#0a253b] border-2 border-white text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
