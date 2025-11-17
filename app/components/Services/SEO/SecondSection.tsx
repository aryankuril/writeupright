import React, { useState } from "react";

export default function SecondSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full container py-10 sm:py-15 lg:py-20 flex flex-col items-center bg-white">
      {/* Heading */}
     <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black ">
        Interactive Title Tag & Meta Description
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Hover to see the transformation from unoptimized to optimized
      </p>

      {/* Search Bar */}
      <div className="w-full bg-gray-100 rounded-xl shadow-sm p-5">
        <div className="flex items-center gap-3 w-full bg-white p-3 rounded-lg border border-gray-200">
          <span className="text-blue-500 text-xl">🔍</span>
          <input
            className="w-full outline-none"
            value="best SEO practices 2025"
            readOnly
          />
        </div>

        {/* Result Box */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="mt-5 p-6 rounded-xl transition-all duration-300 cursor-pointer shadow-sm "
         
        >
          <p className="text-sm text-gray-500">www.example.com › seo › guide</p>

          {/* Title */}
          <h3 className="text-lg font-semibold mt-1 transition-all duration-300" style={{
            color: hovered ? "#0F7C21" : "#1a0dab",
          }}>
            {hovered
              ? "Best SEO Practices 2025: Complete Guide to Ranking #1"
              : "SEO Guide - Our Website"}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mt-2 transition-all duration-300">
            {hovered
              ? "Discover the top SEO practices for 2025. Learn proven strategies to improve rankings, increase organic traffic, and outperform competitors. Updated Nov 2025."
              : "Learn about SEO on our website. We have information about search engine optimization."}
          </p>

          {/* Status Box */}
          <div
            className="mt-5 p-4 rounded-lg flex items-center justify-between transition-all duration-300"
            style={{
              backgroundColor: hovered ? "#D7FADF" : "#FFE8E8",
              border: hovered ? "1px solid #8BE59A" : "1px solid #FFB3B3",
            }}
          >
            <span className="flex items-center gap-2 font-medium" style={{
              color: hovered ? "#0F7C21" : "#C00000",
            }}>
              {hovered ? "✓ Optimized for CTR" : "✕ Needs Optimization"}
            </span>
            <span className="text-gray-400 text-sm">
              {hovered ? "Hover to see before" : "Hover to see after"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
