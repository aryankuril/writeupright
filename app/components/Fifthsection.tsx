"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali R.",
    rating: 5,
    content:
      "The best part was how easy they made everything. It seemed so complicated in my head but they handled design, features, content, and launch flawlessly.",
    tagline: "Verified Google Review",
    designation: "Education Institute",
    image: "/images/card-img.jpg",
    googleVerified: true,
  },
  {
    name: "Rajesh C.",
    rating: 5,
    content:
      "Their SEO strategy is practical and transparent. We finally understand what’s actually happening behind the scenes.",
    tagline: "Verified Google Review",
    designation: "Real Estate Consultant",
    image: "/images/card-img.jpg",
    googleVerified: false,
  },
  {
    name: "Devang M.",
    rating: 4,
    content:
      "Traffic went up, calls went up, and our Google visibility improved more than we expected.",
    tagline: "Verified Google Review",
    designation: "E-commerce Store",
    image: "/images/card-img.jpg",
    googleVerified: false,
  },
  {
    name: "Jasmin L.",
    rating: 4,
    content:
      "Our social media pages look so professional now. Content quality improved and we are receiving business enquiries which they promised.",
    tagline: "Verified Google Review",
    designation: "Furniture Store Owner",
    image: "/images/card-img.jpg",
    googleVerified: false,
  },
  {
    name: "Karan B.",
    rating: 5,
    content:
      "Whole team is very well behaved and professional, they do not over promise. They tell you a realistic picture and work diligently—their strategies work, as simple as that.",
    tagline: "Verified Google Review",
    designation: "Manpower Supply Company",
    image: "/images/card-img.jpg",
    googleVerified: true,
  },
  {
    name: "Priya S.",
    rating: 5,
    content:
      "They built our website exactly the way we wanted — clean, fast, and mobile-friendly. Our enquiries increased within the first month with their campaigns.",
    tagline: "Verified Google Review",
    designation: "Travel Agency",
    image: "/images/card-img.jpg",
    googleVerified: true,
  },
];


const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path
      fill="#4285F4"
      d="M24 9.5c3.48 0 5.9 1.5 7.25 2.75l5.3-5.3C33.6 3.5 29.2 1.5 24 1.5 14.85 1.5 7.45 7.35 4.65 15h6.9c2.1-4.2 6.45-7.5 12.45-7.5z"
    />
    <path
      fill="#34A853"
      d="M46.5 24c0-1.5-.15-3-.45-4.5H24v9h12.75c-.6 3-2.4 5.55-5.1 7.2l7.8 6C43.5 38.25 46.5 31.95 46.5 24z"
    />
    <path
      fill="#FBBC05"
      d="M11.55 28.5A9.3 9.3 0 0 1 10.5 24c0-1.575.375-3.075 1.05-4.5l-7.8-6C2.25 16.2 1.5 19 1.5 22s.75 5.85 2.25 8.5l7.8-6z"
    />
    <path
      fill="#EA4335"
      d="M24 46.5c6.6 0 12.15-2.175 16.2-5.85l-7.8-6c-2.25 1.5-5.1 2.4-8.4 2.4-6 0-11.1-4.05-12.9-9.45l-7.8 6C7.5 41.1 15.15 46.5 24 46.5z"
    />
  </svg>
);

const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#1DA1F2"
    viewBox="0 0 24 24"
  >
    <path d="M22.5 12l-2.4 2.8.6 3.7-3.6 1.1-1.8 3.3-3.3-1.8L8.4 23 7.3 19.4 3.6 18.3l.6-3.7L1.5 12l2.7-2.6-.6-3.7 3.6-1.1L8.4 1l3.3 1.8L15.6 1l1.1 3.6 3.6 1.1-.6 3.7 2.4 2.6zM10.4 16l6.6-6.6-1.4-1.4-5.2 5.2-2.2-2.2-1.4 1.4L10.4 16z" />
  </svg>
);

const Fifthsection: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 8,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="w-full max-w-7xl container py-10 sm:py-15 lg:py-20">
      {/* Header */}
      <div className="container w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-1 lg:gap-20 md:items-center text-left">
            <motion.h2
className="flex-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010205] font-semibold leading-[100%] tracking-[-1.44px]"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // animate when 30% in view
      
    >
      {"What Clients Say".split(" ").map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>

        <motion.div
          className="flex-1 text-[15px] sm:text-[16px] text-[#878C91] mt-2 lg:mt-4 font-medium leading-[180%] max-w-[350px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          See what our clients have to say about working with us and the
          results we deliver.
        </motion.div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={sliderRef} className="keen-slider mt-10">
        {testimonials.map((item, index) => (
          <div key={index} className="keen-slider__slide ">
            <div className="flex flex-col justify-between h-full bg-white shadow-lg border border-black rounded-lg p-6">
              {/* Top Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h3 className="font-bold text-base flex items-center gap-1">
                      {item.name}
                      
                    </h3>
                    <p className="text-xs text-gray-500">{item.designation}</p>
                  </div>
                </div>
               
              </div>

              {/* Star Rating */}
              {/* Star Rating */}
<div className="flex justify-start items-center gap-1">
  {[...Array(5)].map((_, i) => (
    <FaStar
      key={i}
      className={`h-4 w-4 ${i < item.rating ? "text-yellow-400" : "text-gray-300"}`}
    />
  ))}
  <span className="text-sm">{item.rating}/5</span>
  <VerifiedIcon />
</div>

{/* Testimonial */}
<p className="text-gray-700 mt-1 text-sm leading-relaxed">
  {item.content}
</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default  Fifthsection
