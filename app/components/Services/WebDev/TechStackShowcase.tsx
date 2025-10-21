"use client";

import { motion } from "framer-motion";
import React from "react";


const categories = [
  {
    title: "Back End",
    items: [
      "C++", "NestJS", "Flask", "Django", "Express.js", ".NET", "PHP", "Ruby", "Java Spring", "Python"
    ],
  },
  {
    title: "Front End",
    items: [
      "OpenCV", "Next.js", "Svelte", "Vue.js", "Angular", "React.js", "PWA", "TypeScript", "JavaScript", "HTML/CSS"
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      "Conan", "Cmake", "Github Actions", "CUDA", "Datadog", "Grafana", "Kubernetes", "Podman", "Docker", "Google Cloud"
    ],
  },
  {
    title: "Web 3",
    items: ["EVM", "Arbitrum", "NOWNodes", "Web3.js", "Hardhat"],
  },
  {
    title: "Database Development",
    items: [
      "MariaDB", "Redis", "Cassandra", "MongoDB", "Oracle DB", "SQL Server", "PostgreSQL", "Elasticsearch", "MySQL"
    ],
  },
  {
    title: "Artificial Intelligence",
    items: ["DL4J", "Chainer", "OpenCV", "CNTK", "Caffe"],
  },
];

export default function TechStackShowcase() {
  return (
    <div className="container py-10 sm:py-15 lg:py-20">
        <div className=" w-full mx-auto flex flex-col lg:flex-row gap-1 lg:gap-20 md:items-center text-left lg:mb-15 mb-5">
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
      {"Technologies We Use for Web Development".split(" ").map((word, i) => (
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
        We’re making your Web Development up for scales by design with the modern tech stack.
        See what we work with.
        </motion.div>
      </div>

{/* 
      <h1 className="text-4xl font-bold mb-6">Technologies We Use for Web Development</h1>
      <p className="text-gray-600 max-w-2xl mb-12">
        We’re making your Web Development up for scales by design with the modern tech stack.
        See what we work with.
      </p> */}

      <div className="grid md:grid-cols-2 gap-12">
        {categories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-800 shadow-sm text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
