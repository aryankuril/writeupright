"use client"; // <<< Add this

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {

    const headingVariants = {
  hidden: {}, // parent hidden state
  visible: {
    transition: {
      staggerChildren: 0.05, // stagger each child
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
  return (
    <footer className="py-12 lg:px-4 bg-[#0a253b]">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">

        {/* Left Section - Logo + Text + Social */}
        <div className="space-y-6">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 50 }}       // start invisible & below
            whileInView={{ opacity: 1, y: 0 }}   // fade in and slide up
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // animate when 30% visible
          >
            <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
          </motion.div>

          <p className="text-white font-['Roboto'] lg:w-[450px] text-[14px] font-normal leading-[24px]">
            We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.
          </p>

          {/* Social Icons */}
                  <motion.div
  className="inline-flex gap-4"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each icon
      },
    },
  }}
>
  {[
    { src: "/icons/facebook.svg", alt: "Facebook" },
    { src: "/icons/twitter.svg", alt: "Twitter" },
    { src: "/icons/linkedin.svg", alt: "LinkedIn" },
    { src: "/icons/instagram.png", alt: "Instagram" },
  ].map((icon, i) => (
    <motion.div
      key={i}
      className="inline-block cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      <Image src={icon.src} alt={icon.alt} width={40} height={40} />
    </motion.div>
  ))}
</motion.div>

        </div>

        {/* Navigation Links */}
        <div className="space-y-1 lg:ml-70 ml-1 md:ml-45">

            
<motion.h4
  className="text-white font-bold text-[18px] mt-1 mb-7 inline-flex"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between each letter
      },
    },
  }}
>
  {"Navigation".split("").map((letter, i) => (
    <motion.span
      key={i}
      className="inline-block"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
    >
      {letter}
    </motion.span>
  ))}
</motion.h4>


          <ul className="space-y-2 text-white text-[14px]">
            <li><a href="#">Service</a></li>
            <li><a href="#">Agency</a></li>
            <li><a href="#">CaseStudy</a></li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* License Links */}
        <div className="space-y-4 ml-30 md:ml-20 lg:ml-30 -mt-54 sm:mt-0"> 
            <motion.h4
  className="text-white bold text-[18px] mt-1 mb-7 inline-flex"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between each letter
      },
    },
  }}
>
  {"Licence".split("").map((letter, i) => (
    <motion.span
      key={i}
      className="inline-block"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
    >
      {letter}
    </motion.span>
  ))}
</motion.h4>


          <ul className="space-y-2 text-white text-[14px]">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Copyright</a></li>
            <li><a href="#">Email Address</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
            <motion.h4
  className="text-white font-bold text-[18px] mt-1 mb-7 inline-flex"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // delay between each letter
      },
    },
  }}
>
  {"Contact".split("").map((letter, i) => (
    <motion.span
      key={i}
      className="inline-block"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
      }}
    >
      {letter}
    </motion.span>
  ))}
</motion.h4>


          <ul className="space-y-4 text-white text-[14px]">
            <li className="flex items-center gap-3">
              <Image src="/icons/phone-w.png" alt="Phone" width={16} height={16} />
              (406) 555-0120
            </li>
            <li className="flex items-center gap-3">
              <Image src="/icons/email-w.png" alt="Email" width={16} height={16} />
              Hey@boostim.com
            </li>
            <li className="flex items-center gap-3">
              <Image src="/icons/location-w.png" alt="Location" className="-mt-5" width={20} height={30} />
              2972 Westheimer Rd. Santa Ana,<br />Illinois 85486
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
