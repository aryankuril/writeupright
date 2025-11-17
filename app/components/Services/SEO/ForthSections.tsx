import React from "react";
import { ChevronRight } from "lucide-react";

export default function FourthSection() {
  return (
    <section className="w-full bg-[#1a2233]  py-10 sm:py-15 lg:py-20 flex flex-col items-center text-white px-4">
      {/* Title */}
      <div className="container">
      <h2 className="text-xl md:text-2xl font-medium text-center mb-2">
        Internal Linking Structure
      </h2>
      <p className="text-sm md:text-base text-center text-gray-300 mb-14">
        How relevant internal links connect topic clusters to build authority
      </p>

      {/* ===== MAIN TOPIC + LINES ===== */}
      <div className="relative flex flex-col items-center">
        {/* Main Topic Card */}
        <div className="bg-gradient-to-b from-[#c950ff] to-[#ff4f81] text-white py-6 px-10 rounded-xl shadow-lg text-center">
          <h3 className="text-xl font-semibold">Main Topic</h3>
          <p className="text-sm text-gray-100 mt-1">SEO Complete Guide</p>
        </div>

        {/* LINES → Technical, OnPage, OffPage */}
        <svg
          width="100%"
          height="140"
          viewBox="0 0 500 140"
          className="mt-4 pointer-events-none"
        >
          {/* Center vertical dotted line */}
          <line
            x1="250"
            y1="0"
            x2="250"
            y2="180"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* Left diagonal line */}
          <line
            x1="250"
            y1="0"
            x2="10"
            y2="140"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="hidden md:block" 
          />

          {/* Right diagonal line */}
          <line
            x1="250"
            y1="0"
            x2="510"
            y2="150"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeDasharray="6 6"
             className="hidden md:block" 
          />
        </svg>
      </div>

      {/* ===== BOTTOM 3 BOXES ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl mt-6">

        {/* Technical SEO */}
        <div className="bg-gradient-to-r from-[#1e9afe] to-[#00c6fb] rounded-xl p-6 shadow-md">
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>↪</span> Technical SEO
          </h4>

          <ul className="space-y-3">
            {["Site Speed", "Mobile Optimization", "Crawlability"].map(
              (item, i) => (
                <li key={i} className="bg-white/20 p-3 rounded-lg flex items-center gap-2">
                  <ChevronRight size={16} /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* On-Page SEO */}
        <div className="bg-gradient-to-r from-[#00c97b] to-[#00e676] rounded-xl p-6 shadow-md">
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>↪</span> On-Page SEO
          </h4>

          <ul className="space-y-3">
            {["Meta Tags", "Content Structure", "Schema Markup"].map(
              (item, i) => (
                <li key={i} className="bg-white/20 p-3 rounded-lg flex items-center gap-2">
                  <ChevronRight size={16} /> {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Off-Page SEO */}
        <div className="bg-gradient-to-r from-[#ff7a2f] to-[#ff4f4f] rounded-xl p-6 shadow-md">
          <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>↪</span> Off-Page SEO
          </h4>

          <ul className="space-y-3">
            {["Link Building", "Social Signals", "Brand Mentions"].map(
              (item, i) => (
                <li key={i} className="bg-white/20 p-3 rounded-lg flex items-center gap-2">
                  <ChevronRight size={16} /> {item}
                </li>
              )
            )}
          </ul>
        </div>

      </div>
      </div>
    </section>
  );
}
