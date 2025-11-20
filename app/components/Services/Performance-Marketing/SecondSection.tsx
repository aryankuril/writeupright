"use client"
import React, { useState ,useEffect, useRef } from "react";
import Image from "next/image";
import { Search, Monitor, Video, Music, Users, Tag, BarChart2, AlertCircle ,CheckCircle, ArrowRight  } from "lucide-react";
import clsx from "clsx";

type TabKey = "google" | "meta" | "video" | "spotify";

export default function SecondSection() {
  const [tab, setTab] = useState<TabKey>("google");
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Auto-scroll to selected tab
  useEffect(() => {
    const el = itemRefs.current[tab];
    const container = containerRef.current;

    if (el && container) {
      container.scrollTo({
        left: el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [tab]);

  const tabs = [
    { id: "google", label: "Google Ads", icon: <Search className="w-4 h-4" /> },
    { id: "meta", label: "Meta Ads", icon: <Users className="w-4 h-4" /> },
    { id: "video", label: "Video Ads", icon: <Video className="w-4 h-4" /> },
    { id: "spotify", label: "Spotify", icon: <Music className="w-4 h-4" /> },
  ];

  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20" aria-label="Fourth section - Ads overview">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 lg:p-6 p-3">
        {/* Tabs */}
        <nav
      ref={containerRef}
      className="
        w-full bg-gray-200 p-2 rounded-full 
        flex items-center gap-3 
        overflow-x-auto scrollbar-hide
        justify-between md:justify-around
      "
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          ref={(el) => {
  itemRefs.current[t.id] = el;
}}

         onClick={() => setTab(t.id as TabKey)}

          className={clsx(
            "flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all",
            tab === t.id
              ? "bg-white shadow-sm font-medium"
              : "text-gray-600 hover:text-black"
          )}
        >
          {t.icon}
          <span>{t.label}</span>
        </button>
      ))}
    </nav>

        {/* Content panels */}
        <div className="mt-6">
       {tab === "google" && (
  <Panel title=" ">
    <div className="space-y-10">

      {/* MAIN TITLE + CENTERED DESCRIPTION */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          Google Ads: Search & Display
        </h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
          Leverage Google’s powerful search intent and massive display network
          to reach high-intent customers and grow your brand visibility across the web.
        </p>
      </div>

      {/* ░ SEARCH INTENT SECTION ░ */}
      <div className="bg-white rounded-xl border lg:p-6 p-3 shadow-sm">
        <h3 className="text-base font-semibold text-black ">
          Search Intent: Connect at the Moment of Need
        </h3>
        <p className="text-sm text-gray-500 mt-1 ">
          Reach customers actively searching for solutions like yours
        </p>

        {/* 3 STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* 1 */}
          <div className="bg-[#0a253b] rounded-xl p-5  ">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <h4 className="text-sm font-semibold text-white mt-3">User Searches</h4>
            <p className="text-xs text-white mt-1">
              “best running shoes for marathons”
            </p>
            <p className="text-sm text-blue-600 font-semibold mt-4">90%</p>
            <p className="text-[11px] text-white -mt-1">
              of online experiences start with search
            </p>
          </div>

          {/* 2 */}
          <div className="bg-[#0a253b] rounded-xl p-5 ">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <h4 className="text-sm font-semibold text-white mt-3">Your Ad Appears</h4>
            <p className="text-xs text-white mt-1">
              Premium marathon shoes – Free shipping & returns
            </p>
            <p className="text-sm text-indigo-600 font-semibold mt-4">8.5B</p>
            <p className="text-[11px] text-white -mt-1">
              searches per day on Google
            </p>
          </div>

          {/* 3 */}
          <div className="bg-[#0a253b] rounded-xl p-5 ">
            <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <h4 className="text-sm font-semibold text-white mt-3">User Converts</h4>
            <p className="text-xs text-white mt-1">
              Click → Visit → Purchase. Measurable ROI.
            </p>
            <p className="text-sm text-pink-600 font-semibold mt-4">2x</p>
            <p className="text-[11px] text-white -mt-1">
              higher conversion than display ads
            </p>
          </div>

        </div>
      </div>

      {/* ░ DISPLAY NETWORK SECTION ░ */}
      <div className="bg-white rounded-xl border lg:p-6 p-3 shadow-sm">

  {/* Title */}
  <h3 className="text-base font-semibold text-black">
    Display Network: Massive Reach Across the Web
  </h3>
  <p className="text-sm text-gray-600 mt-1">
    Your ads appear on 2M+ websites and apps reaching 90% of internet users
  </p>

  {/* MAIN BOX */}
  <div className="mt-6">

    {/* TOP GRADIENT + DIAGRAM */}
<div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">

  {/* DIAGRAM WRAPPER */}
  <div
    className="
      relative
      h-80 sm:h-64 w-full
      rounded-xl bg-white/60 border border-gray-200 shadow-sm
      overflow-hidden
    "
  >

    {/* CENTER NODE */}
    <div
      className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-[#0a253b] text-white
        w-16 h-16 sm:w-20 sm:h-20
        rounded-full flex items-center justify-center
        text-xs sm:text-sm font-semibold shadow-md z-20
      "
    >
      Your Ad
    </div>

    {/* CONNECTOR LINES */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Left lines */}
      <line x1="50%" y1="50%" x2="18%" y2="28%" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="50%" y1="50%" x2="22%" y2="75%" stroke="#CBD5E1" strokeWidth="2" />

      {/* Right lines */}
      <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="50%" y1="50%" x2="88%" y2="55%" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="50%" y1="50%" x2="78%" y2="82%" stroke="#CBD5E1" strokeWidth="2" />
    </svg>

    {/* NODES */}
    <Node label="Mobile Apps" position="top-[24%] left-[10%] sm:top-[25%] sm:left-[14%]" />
    <Node label="Gaming" position="top-[66%] left-[14%] sm:top-[65%] sm:left-[18%]" />
    <Node label="Video Sites" position="top-[16%] right-[8%] sm:top-[20%] sm:right-[15%]" />
    <Node label="Blogs" position="top-[48%] right-[8%] sm:top-[48%] sm:right-[10%]" />
    <Node label="E-commerce" position="bottom-[12%] right-[12%] sm:bottom-[15%] sm:right-[14%]" />

  </div>
</div>


    {/* BOTTOM TWO STATS (FULL-WIDTH LIKE IMAGE) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

      {/* LEFT STAT CARD */}
      <div className="rounded-xl border bg-purple-50/40 p-5">
        <h4 className="font-semibold text-black">Visual Storytelling</h4>
        <p className="text-sm text-gray-600 mt-1">
          Eye-catching images and videos that build brand awareness and
          drive consideration across millions of touchpoints.
        </p>
      </div>

      {/* RIGHT STAT CARD */}
      <div className="rounded-xl border bg-pink-50/40 p-5">
        <h4 className="font-semibold text-black">Retargeting Power</h4>
        <p className="text-sm text-gray-600 mt-1">
          Re-engage visitors who didn’t convert, keeping your brand top-of-mind
          as they browse the web.
        </p>
      </div>

    </div>

    
  </div>
  
</div>
{/* ░ CAMPAIGN PERFORMANCE (MATCHES IMAGE EXACTLY) ░ */}
<div className="bg-white rounded-xl border p-6 shadow-sm mt-10">

  {/* Title */}
  <h3 className="text-base font-semibold text-black">
    Campaign Performance
  </h3>
  <p className="text-sm text-gray-500 mt-1">
    Last 30 days – Real-time tracking & optimization
  </p>

  {/* GRID 4 METRICS */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

    {/* CTR */}
    <div className="flex items-start gap-3 rounded-xl border bg-gray-50 p-4">
      {/* <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <i className="fa-solid fa-bolt"></i>
      </div> */}
      <div>
        <p className="text-sm font-semibold text-black">Click-Through Rate</p>
        <div className="flex flex-row items-center gap-2">
  <p className="text-lg font-semibold text-black">4.2%</p>
  <p className="text-xs text-green-600 font-medium">+0.8%</p>
</div>

      </div>
    </div>

    {/* Conversion Rate */}
    <div className="flex items-start gap-3 rounded-xl border bg-gray-50 p-4">
      {/* <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
        <i className="fa-solid fa-bullseye"></i>
      </div> */}
      <div>
        <p className="text-sm font-semibold text-black">Conversion Rate</p>
         <div className="flex flex-row items-center gap-2">
        <p className="text-lg font-semibold text-black">12.5%</p>
        <p className="text-xs text-green-600 font-medium">+2.3%</p>
        </div>
      </div>
    </div>

    {/* Cost Per Conversion */}
    <div className="flex items-start gap-3 rounded-xl border bg-gray-50 p-4">
      {/* <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
        <i className="fa-solid fa-dollar-sign"></i>
      </div> */}
      <div>
        <p className="text-sm font-semibold text-black">Cost Per Conversion</p>
             <div className="flex flex-row items-center gap-2">
        <p className="text-lg font-semibold text-black">$24.50</p>
        <p className="text-xs text-green-600 font-medium">+3.20</p>
        </div>
      </div>
    </div>

    {/* ROAS */}
    <div className="flex items-start gap-3 rounded-xl border bg-gray-50 p-4">
      {/* <div className="w-8 h-8 flex items-center justify-center rounded-full bg-pink-100 text-pink-600">
        <i className="fa-solid fa-chart-line"></i>
      </div> */}
      <div>
        <p className="text-sm font-semibold text-black">Return on Ad Spend</p>
             <div className="flex flex-row items-center gap-2">
        <p className="text-lg font-semibold text-black">4.8x</p>
        <p className="text-xs text-green-600 font-medium">+0.6x</p>
        </div>
      </div>
    </div>

  </div>

  {/* BOTTOM BLUE NOTICE */}
  <div className="mt-6 bg-blue-50 border border-blue-100 text-blue-700 text-sm rounded-xl p-4">
    <span className="font-semibold">Data-Driven Optimization:</span> 
    Our algorithms continuously analyze performance metrics to adjust bids, targeting, 
    and creative elements, ensuring maximum ROI for your campaigns.
  </div>
</div>

    </div>
  </Panel>
)}


         {tab === "meta" && (
  <Panel title=" ">
    <div className="space-y-6">

      <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          Meta Ads: Facebook & Instagram
        </h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
         Leverage the world&aposs most sophisticated audience targeting to reach your ideal customers across Facebook and Instagram&aposs 3 billion+ active users.
        </p>
      </div>

      {/* Precision Audience Targeting */}
      <div className="rounded-xl border border-[#f4d7e8] bg-[#fdf4fa] lg:p-6 p-3">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <span className="text-purple-600 text-xl">🎯</span>
          Precision Audience Targeting
        </h4>
        <p className="text-sm text-gray-500 mt-1">
          Reach exactly who you want, when you want, with unparalleled targeting capabilities
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* AGE */}
          <div className="p-4 rounded-lg bg-[#f3e7fb] border border-transparent">
            <p className="text-xs font-semibold text-purple-700 flex items-center gap-2">
              <span className="text-base">📅</span> AGE
            </p>
            <p className="mt-1 text-sm text-gray-700">25-45</p>
          </div>

          {/* LOCATION */}
          <div className="p-4 rounded-lg bg-[#e0ecff] border border-transparent">
            <p className="text-xs font-semibold text-blue-700 flex items-center gap-2">
              <span className="text-base">📍</span> LOCATION
            </p>
            <p className="mt-1 text-sm text-gray-700">Major Cities</p>
          </div>

          {/* INTERESTS */}
          <div className="p-4 rounded-lg bg-[#fde1ea] border border-transparent">
            <p className="text-xs font-semibold text-pink-700 flex items-center gap-2">
              <span className="text-base">💗</span> INTERESTS
            </p>
            <p className="mt-1 text-sm text-gray-700">Fitness, Travel</p>
          </div>

          {/* JOB TITLE */}
          <div className="p-4 rounded-lg bg-[#e7f7ef] border border-transparent">
            <p className="text-xs font-semibold text-green-700 flex items-center gap-2">
              <span className="text-base">💼</span> JOB TITLE
            </p>
            <p className="mt-1 text-sm text-gray-700">Professionals</p>
          </div>

          {/* BEHAVIOR */}
          <div className="p-4 rounded-lg bg-[#ffe9cf] border border-transparent">
            <p className="text-xs font-semibold text-orange-700 flex items-center gap-2">
              <span className="text-base">🛒</span> BEHAVIOR
            </p>
            <p className="mt-1 text-sm text-gray-700">Online Shoppers</p>
          </div>

          {/* LOOKALIKE */}
          <div className="p-4 rounded-lg bg-[#dfe8ff] border border-transparent">
            <p className="text-xs font-semibold text-blue-700 flex items-center gap-2">
              <span className="text-base">📈</span> LOOKALIKE
            </p>
            <p className="mt-1 text-sm text-gray-700">1% Similar</p>
          </div>
        </div>

        {/* Bottom Large Box */}
        <div className="mt-8 rounded-xl bg-[#fceaff] lg:p-6 p-3">
          <h5 className="font-semibold text-gray-700 mb-4">Precision Targeting Strategy</h5>

          <div className="space-y-4">

            <div className="flex gap-3">
              <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">1</div>
              <div>
                <p className="font-medium text-gray-700">Core Audience</p>
                <p className="text-sm text-gray-500">
                  Target specific demographics, interests, and behaviors from Meta&aposs 3B+ users
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">2</div>
              <div>
                <p className="font-medium text-gray-700">Custom Audiences</p>
                <p className="text-sm text-gray-500">
                  Retarget website visitors, email lists, and engaged users
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">3</div>
              <div>
                <p className="font-medium text-gray-700">Lookalike Expansion</p>
                <p className="text-sm text-gray-500">
                  Reach new users who share characteristics with your best customers
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Engaging Creative That Stops the Scroll */}
      <div className="rounded-xl border bg-white lg:p-6 p-3 mt-8">
  <h4 className="text-lg font-semibold text-gray-700">
    Engaging Creative That Stops the Scroll
  </h4>
  <p className="text-sm text-gray-500 mt-1">
    Capture attention with visually stunning ads optimized for mobile feeds
  </p>

  <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto">

    {/* Left Instagram Story */}
    <div className="rounded-2xl bg-[#0a253b]  p-4">
      {/* Header */}
      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-pink-500"></span>
          <div>
            <p className="font-semibold text-white text-sm">Your Brand Name</p>
            <p className="text-xs text-gray-500">
              Sponsored • <span className="text-yellow-500">✦</span>
            </p>
          </div>
        </div>
        <span className="text-gray-400">Instagram Story</span>
      </div>

      {/* Image */}
      <div className="rounded-xl overflow-hidden ">
        <img
          src="/images/section1-img1.png"
          className="w-full h-[680px] object-cover"
        />
      </div>

      {/* CTA */}
      <div className="mt-4">
        <p className="text-sm text-white">Experience the Difference</p>
        <div className="mt-2 bg-white rounded-full p-2 text-center text-sm font-semibold border border-gray-300">
          Shop Now
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Vertical format optimized for mobile viewing
      </p>
    </div>

    {/* Right Facebook Feed */}
    <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm h-auto self-start">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          <div className="h-8 w-8 rounded-full bg-purple-500"></div>
          <div>
            <p className="font-semibold text-gray-700 text-sm">Your Brand Name</p>
            <p className="text-xs text-gray-500">
              Sponsored • <span className="text-yellow-500">✦</span>
            </p>
          </div>
        </div>
        <span className="text-xs text-gray-400">Facebook Feed</span>
      </div>

      {/* Ad Text */}
      <p className="mt-3 text-sm text-gray-700">
        Transform your experience with our innovative solution. Limited time offer! 🚀
      </p>

      {/* Image */}
      <div className="mt-3 rounded-xl overflow-hidden border border-gray-200">
        <img
          src="/images/section1-img1.png"
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Link & CTA */}
      <div className="mt-4">
        <p className="text-xs text-gray-500">YOURBRAND.COM</p>
        <p className="text-sm text-gray-700 font-medium">
          Discover Something Amazing
        </p>
        <p className="text-xs text-gray-500">
          Special offer ends soon. Don’t miss out!
        </p>

        <button className="w-full mt-3 bg-[#0a253b] text-white py-2 rounded-full text-sm font-medium">
          Learn More
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex items-center justify-around text-xs text-gray-500 mt-3">
        <div className="flex items-center gap-1">👍 Like</div>
        <div className="flex items-center gap-1">💬 Comment</div>
        <div className="flex items-center gap-1">↗ Share</div>
      </div>
    </div>

  </div>

  {/* Bottom Stats */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-[#0a253b]  rounded-xl p-4 text-center">
      <p className="text-2xl font-bold text-blue-700">9.5x</p>
      <p className="text-xs text-white mt-1">
        Higher engagement with video vs. static
      </p>
    </div>

    <div className="bg-[#0a253b] rounded-xl p-4 text-center">
      <p className="text-2xl font-bold text-pink-700">87%</p>
      <p className="text-xs text-white mt-1">
        Of users take action after seeing an ad
      </p>
    </div>

    <div className="bg-[#0a253b]  rounded-xl p-4 text-center">
      <p className="text-2xl font-bold text-pink-600">3B+</p>
      <p className="text-xs text-white mt-1">
        Monthly active users to reach
      </p>
    </div>
  </div>

      </div>

      {/* Lookalike Audiences: Scale Your Success */}
<div className="mt-8 rounded-xl border  bg-white">
  {/* Top gradient header */}
  <div className="rounded-t-xl  lg:p-6 p-3">
    <h4 className="text-base font-semibold text-gray-800">
      Lookalike Audiences: Scale Your Success
    </h4>
    <p className="text-sm text-gray-500">
      Find new customers who look and act like your best existing ones
    </p>
  </div>

  {/* Content */}
  <div className="lg:p-6 p-3 flex flex-col lg:flex-row gap-8">
    {/* Left steps */}
    <div className="flex-1 space-y-5">
      {/* 1 */}
      <div className="flex gap-3 items-start">
  <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">
    1
  </div>

  <div>
    <p className="font-semibold text-gray-800">Source Audience</p>
    <p className="text-sm text-gray-500">
      Start with your best customers – website visitors, email subscribers, or purchasers
    </p>
  </div>
</div>


      {/* 2 */}
      <div className="flex gap-3">
        <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">
          2
        </div>
        <div>
          <p className="font-semibold text-gray-800">Meta&apos;s AI Analysis</p>
          <p className="text-sm text-gray-500">
            Advanced algorithms identify common demographics, interests, and behaviors
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex gap-3">
      <div className="flex items-center justify-center h-8 w-8 min-h-8 min-w-8 rounded-full bg-[#0a253b] text-white text-sm font-semibold leading-none">
          3
        </div>
        <div>
          <p className="font-semibold text-gray-800">New Customer Discovery</p>
          <p className="text-sm text-gray-500">
            Reach millions of similar users who are likely to be interested in your products
          </p>
        </div>
      </div>
    </div>

    {/* Right card */}
    <div className="flex-1">
      <div className="rounded-2xl bg-[#0a253b] p-6 text-center">
        <p className="text-sm font-medium text-white mb-4">
          Lookalike Audience Size
        </p>

        {/* Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
            1% - Highest Quality
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
            5% - Balanced
          </span>
          <span className="px-3 py-1 rounded-full bg-white text-xs font-medium text-gray-700 border border-gray-200 shadow-sm">
            10% - Max Reach
          </span>
        </div>

        {/* Inner white pill */}
        <div className="mx-auto rounded-2xl bg-white px-6 py-8 max-w-md shadow-sm">
          <p className="text-xl font-semibold text-indigo-600 mb-1">10–50x</p>
          <p className="text-xs text-gray-500">
            Typical audience expansion from source
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* bottom rounded corners spacing */}
  <div className="h-2 rounded-b-xl"></div>
</div>


    </div>
  </Panel>
)}


          {tab === "video" && (
  <Panel title=" ">


    <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          YouTube & TikTok: Video Advertising
        </h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
          Harness the power of video storytelling to build brand awareness, drive engagement, 
      and convert viewers into customers across the world’s leading video platforms.
        </p>
      </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* ---------------------------------------------------------- */}
      {/* YOUTUBE CARD */}
      {/* ---------------------------------------------------------- */}

      <div className="bg-white rounded-xl  border border-gray-200 lg:p-6 p-3 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 text-white p-2 rounded-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 15.5l5-3.5-5-3.5v7z" />
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.9 5 12 5 12 5h-.1s-3.9 0-6.9.1c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.2 6.8.2 6.8.2s3.9 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C22 9.6 21.8 8 21.8 8z" />
              </svg>
            </div>
            <p className="font-semibold">YouTube</p>
          </div>

          <span className="text-xs bg-[#0a253b]  text-white px-3 py-1 rounded-full">
            Horizontal
          </span>
        </div>

        {/* Image */}
        <div className="mt-4 rounded-xl overflow-hidden h-[260px]">
  <Image
    src="/images/section1-img1.png"
    width={900}
    height={500}
    alt="YouTube Ad Mock"
    className="object-cover h-full w-full"
  />
</div>


        {/* Features */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-red-500 text-xl">🎬</span>
            <div>
              <p className="font-semibold">Long-Form Content</p>
              <p className="text-sm text-gray-600">6–30 sec skippable ads, 15–20 sec bumper ads</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-red-500 text-xl">🎯</span>
            <div>
              <p className="font-semibold">Intent-Based Targeting</p>
              <p className="text-sm text-gray-600">Reach users searching for related topics</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-red-500 text-xl">🏆</span>
            <div>
              <p className="font-semibold">Brand Building</p>
              <p className="text-sm text-gray-600">Perfect for storytelling & demos</p>
            </div>
          </div>
        </div>

        {/* Best For Box */}
        <div className="mt-6 bg-[#0a253b]  text-white p-4 rounded-lg text-sm">
          <b>Best For:</b> Educational content, product demos, brand awareness with detailed messaging.
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/* TIKTOK CARD */}
      {/* ---------------------------------------------------------- */}

      <div className="bg-white rounded-xl border border-gray-200 lg:p-6 p-3 shadow-sm">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-purple-500 text-white p-2 rounded-lg">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.3 2 12s4.5 10 10 10 10-4.3 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <p className="font-semibold">TikTok</p>
          </div>

          <span className="text-xs bg-[#0a253b]  text-white px-3 py-1 rounded-full">
            Vertical
          </span>
        </div>

        {/* Vertical Mockup */}
         <div className="mt-4 flex justify-center rounded-xl overflow-hidden h-[460px]">
          <Image
            src="/images/section1-img1.png"
            width={260}
            height={500}
            alt="TikTok Ad Mock"
             className="object-cover h-full rounded-xl "
          />
        </div>

        {/* Features */}
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-purple-500 text-xl">⚡</span>
            <div>
              <p className="font-semibold">Short & Snappy</p>
              <p className="text-sm text-gray-600">5–60 seconds optimized for quick consumption</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-purple-500 text-xl">📈</span>
            <div>
              <p className="font-semibold">Trend-Driven</p>
              <p className="text-sm text-gray-600">Leverage trending sounds & challenges</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <span className="text-purple-500 text-xl">🌱</span>
            <div>
              <p className="font-semibold">Native Feel</p>
              <p className="text-sm text-gray-600">
                Ads that blend seamlessly with organic content
              </p>
            </div>
          </div>
        </div>

        {/* Best For Box */}
        <div className="mt-6 bg-[#0a253b]  text-white p-4 rounded-lg text-sm">
          <b>Best For:</b> Younger audiences, viral potential, authentic brand personality, impulse purchases.
        </div>
      </div>

    </div>

    <div className=" mt-6 w-full bg-white border rounded-xl lg:p-6 p-3 ">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        The Power of Video Storytelling
      </h2>
      <p className="text-gray-600 mb-10">
        Create emotional connections and drive action through compelling visual
        narratives
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Why Video Ads Work
          </h3>

          <div className="space-y-6">
            {/* ITEM 1 */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle className="text-red-500 w-6 h-6" />
              <p className="text-gray-700">
                <span className="font-semibold">95% retention:</span> Viewers
                retain 95% of a message when watching a video vs. 10% when
                reading text.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle className="text-purple-500 w-6 h-6" />
              <p className="text-gray-700">
                <span className="font-semibold">Emotional impact:</span> Video
                combines sight, sound, and motion to create memorable brand
                experiences.
              </p>
            </div>

            {/* ITEM 3 */}
            <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm">
              <CheckCircle className="text-pink-500 w-6 h-6" />
              <p className="text-gray-700">
                <span className="font-semibold">Higher conversions:</span>{" "}
                Including video on landing pages can increase conversions by
                80%.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#0a253b] rounded-xl lg:p-6 p-3 border border-blue-100">
          <h3 className="text-lg font-semibold text-white ">
            Measurable Actions & CTAs
          </h3>
          <p className="text-gray-400 mb-6">
            Video ads include strategic calls-to-action that drive viewers to
            take immediate action:
          </p>

          <div className="space-y-4">
            {[
              "Visit website",
              "Shop product pages",
              "Download apps",
              "Complete lead forms",
              "Subscribe to channels",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50"
              >
                <span className="text-gray-700">{item}</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 mt-10">
        <div className="bg-[#0a253b] rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-red-500">2.5B</h3>
          <p className="text-gray-400 text-sm">YouTube users globally</p>
        </div>

        <div className="bg-[#0a253b] rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-purple-500">1.5B</h3>
          <p className="text-gray-400 text-sm">TikTok monthly users</p>
        </div>

        <div className="bg-[#0a253b] rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-pink-500">52min</h3>
          <p className="text-gray-400 text-sm">Avg daily TikTok usage</p>
        </div>

        <div className="bg-[#0a253b] rounded-xl p-6 text-center">
          <h3 className="text-2xl font-semibold text-blue-500">1B hrs</h3>
          <p className="text-gray-400 text-sm">YouTube watched daily</p>
        </div>
      </div>
    </div>

  </Panel>
)}


        {tab === "spotify" && (
  <Panel title=" ">


     <div className="text-center">
        <h2 className="text-xl font-semibold text-black">
          Spotify Ads: Audio & Podcast Advertising
        </h2>
        <p className="text-sm text-gray-500 mt-1 max-w-xl mx-auto">
          Reach highly engaged listeners through audio ads and podcast sponsorships, connecting with audiences in unique screen-less moments throughout their day.
        </p>
      </div>
    <div className="space-y-6">

      {/* TOP GRID */}
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* AUDIO ENGAGEMENT */}
        <div className=" bg-white rounded-xl lg:p-6 p-3 border border-gray-200 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <span className="p-2 bg-green-600 text-white rounded-full">
              🎧
            </span>
            Audio Engagement
          </h4>

          {/* Now Playing Box */}
          <div className="mt-6 bg-white border border-gray-200 rounded-xl lg:p-6 p-3">
            <div className="flex items-center gap-4">
              <img
                src="/images/section1-img1.png"
                className="w-16 h-16 rounded-lg object-cover"
                alt="playlist"
              />

              <div>
                <p className="text-base font-semibold">Now Playing</p>
                <p className="text-sm text-gray-600">Chill Vibes Playlist</p>
              </div>
            </div>

            {/* Audio Ad Box */}
            <div className="mt-5 border border-gray-200 bg-green-50 p-4 rounded-xl">
              <p className="text-green-700 font-medium flex items-center gap-2">
                <span>🔊</span> Audio Ad • 30 seconds
              </p>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                "Discover the perfect solution for your active lifestyle.
                Visit our website to learn more and get 20% off your first order."
              </p>

              <button className="mt-4 bg-green-600 text-white w-full py-2 rounded-full font-semibold">
                Visit Site
              </button>
            </div>

            {/* Audio Waves */}
           {/* Audio Waves */}
<div className="mt-6 flex justify-center">
  <div className="flex items-end gap-1 h-10">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="w-1 bg-green-600 rounded-t-full animate-wave"
        style={{
          animationDelay: `${i * 0.1}s`,
          height: `${Math.random() * (40 - 8) + 8}px`,
        }}
      ></div>
    ))}
  </div>
</div>


          </div>

          {/* Screen-Less Engagement */}
          <div className="mt-4 bg-white border border-gray-200 p-4 rounded-xl">
            <h5 className="font-semibold text-gray-700">Screen-Less Engagement</h5>
            <p className="text-gray-600 text-sm mt-1">
              Reach listeners when they’re working out, commuting, or relaxing —
              moments when they’re highly engaged but not looking at screens.
            </p>
          </div>
        </div>

        {/* CONTEXTUAL TARGETING */}
        <div className="space-y-6">
  {/* Box 1 */}
  <div className="bg-white rounded-xl lg:p-6 p-3 border border-gray-200 shadow-sm">
    <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
      <span className="p-2 bg-green-600 text-white rounded-full">🎯</span>
      Contextual Targeting
    </h4>

    {/* Tags */}
    <div className="mt-5 grid grid-cols-2 gap-3">
      <div className="bg-green-100 text-green-800 p-3 rounded-lg font-medium flex items-center gap-2">
        🎵 Workout
      </div>
      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg font-medium flex items-center gap-2">
        🚗 Commute
      </div>
      <div className="bg-purple-100 text-purple-800 p-3 rounded-lg font-medium flex items-center gap-2">
        🎧 Focus
      </div>
      <div className="bg-pink-100 text-pink-800 p-3 rounded-lg font-medium flex items-center gap-2">
        🎉 Party
      </div>
    </div>

    {/* Info Rows */}
    <div className="mt-6 space-y-3 text-sm">
      <div className="bg-green-50 border border-green-100 p-3 rounded-lg">
        <span className="font-semibold">Mood & Activity:</span> Target
        listeners based on playlist genres, tempo, and listening behavior.
      </div>
      <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg">
        <span className="font-semibold">Time & Location:</span> Reach users
        during specific times of day or in geographic areas.
      </div>
      <div className="bg-purple-50 border border-purple-100 p-3 rounded-lg">
        <span className="font-semibold">Demographics:</span> Age, gender, and
        interest-based targeting across 500M+ listeners.
      </div>
    </div>
  </div>

  {/* Box 2 */}
  <div className="bg-white border border-gray-200 rounded-xl lg:p-6 p-3 shadow-sm">
    <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
      <span className="p-2 bg-purple-600 text-white rounded-full">🎙️</span>
      Podcast Advertising
    </h4>

    <div className="mt-5 bg-pink-50 border border-pink-200 p-4 rounded-lg">
      <p className="font-semibold text-pink-800">Podcast Episode #42</p>
      <p className="text-sm text-gray-700">Sponsored by Your Brand</p>

      <p className="mt-3 text-gray-700 text-sm italic">
        "This episode is brought to you by [Your Brand]. Transform your daily
        routine with…”
      </p>
    </div>

    <ul className="mt-5 text-gray-700 text-sm space-y-2 list-disc list-inside">
      <li>Highly engaged audiences with 80%+ completion rates</li>
      <li>Host-read ads feel authentic and trusted</li>
      <li>Target by genre, topic, and show demographics</li>
    </ul>
  </div>
</div>

      </div>
      
      


        <div className=" bg-white rounded-xl lg:p-6 p-3 border border-gray-200 shadow-sm">
<div className="mb-6">
<h2 className="text-xl font-semibold text-gray-900">Why Audio Advertising Works</h2>
<p className="text-gray-600 text-sm">Unique advantages of reaching listeners in their daily routines</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
{/* Card 1 */}
<div className="bg-[#0a253b] p-6 rounded-xl text-center shadow-sm">
<div className="flex justify-center mb-3">
<div className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl">
🎧
</div>
</div>
<p className="font-semibold text-green-700">500M+</p>
<p className="text-white text-sm mt-1">Global Spotify listeners ready to engage with your brand</p>
</div>


{/* Card 2 */}
<div className="bg-[#0a253b] p-6 rounded-xl text-center shadow-sm">
<div className="flex justify-center mb-3">
<div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl">
🎯
</div>
</div>
<p className="font-semibold text-blue-700">75%</p>
<p className="text-white text-sm mt-1">Of listeners take action after hearing a Spotify ad</p>
</div>


{/* Card 3 */}
<div className="bg-[#0a253b] p-6 rounded-xl text-center shadow-sm">
<div className="flex justify-center mb-3">
<div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl">
📈
</div>
</div>
<p className="font-semibold text-purple-700">24%</p>
<p className="text-white text-sm mt-1">Higher ad recall compared to traditional radio advertising</p>
</div>
</div>


{/* Bottom Section */}
<div className="bg-[#0a253b] lg:p-6 p-3 rounded-xl shadow-sm">
<h3 className="text-lg font-semibold text-white mb-3">The Screen-Less Advantage</h3>
<p className="text-gray-400 text-sm mb-4">
Audio advertising reaches listeners during unique moments when they&aposre engaged but not looking at screens - whether they&aposre working out, commuting, cooking, or relaxing. This creates a more intimate connection and reduces ad fatigue from visual overload.
</p>


<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm text-sm">
<strong>Intimate Format:</strong> Voice-based ads feel personal and conversational
</div>
<div className="bg-white p-4 rounded-lg shadow-sm text-sm">
<strong>Less Competition:</strong> No visual distractions competing for attention
</div>
</div>
</div>
</div>
      
    </div>
    
  </Panel>
)}

        </div>
      </div>

      
    </section>
  );
}

function Tab({ label, icon, active, onClick }: { label: string; icon: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
        active ? "bg-white shadow-sm text-gray-800" : "text-gray-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Node({ label, position }: { label: string; position: string }) {
  return (
    <div
      className={`absolute ${position} bg-white border shadow-md text-gray-700 
                  text-xs rounded-full px-4 py-2`}
    >
      {label}
    </div>
  );
}



function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm ${className}`}>{children}</div>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-md p-3 text-xs text-gray-600">
      <div className="font-medium text-sm">{label}</div>
      <div className="mt-1">{value}</div>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-md p-3 border border-gray-100 text-xs">
      <div className="text-[10px] text-gray-400">{label}</div>
      <div className="mt-1 font-semibold text-sm text-gray-700">{value}</div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return <span className="text-xs px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600">{label}</span>;
}

function CampaignPerformance() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4">
      <h4 className="text-xs font-medium text-gray-600">Campaign Performance</h4>
      <div className="mt-3 grid grid-cols-1 gap-3 text-xs text-gray-600">
        <PerfItem label="Click-through Rate" value="4.2% (+0.2%)" />
        <PerfItem label="Conversion Rate" value="12.5% (+2.2%)" />
        <PerfItem label="Cost Per Conversion" value="$24.50 (-$1.20)" />
        <PerfItem label="Return on Ad Spend" value="4.8x (+0.6x)" />
      </div>
      <div className="mt-4 text-[11px] text-gray-500">Data-driven optimization: Our algorithms continuously analyze performance to adjust bids, targeting, and creative.</div>
    </div>
  );
}

function PerfItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-500">{label}</div>
      <div className="font-semibold text-gray-700">{value}</div>
    </div>
  );
}
