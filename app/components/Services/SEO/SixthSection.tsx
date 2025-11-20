"use client";

import { useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import type { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function SixthSection() {
  const tabs = ["Traffic Growth", "Engagement", "Conversions"];
  const [activeTab, setActiveTab] = useState("Traffic Growth");

  // ------------------------------------------------
  // DATA
  // ------------------------------------------------
  const trafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Traffic Growth",
        data: [14000, 18000, 23000, 31000, 39000, 50000],
        borderColor: "#FB923C",
        backgroundColor: "#FB923C",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const engagementData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Engagement",
        data: [45, 52, 58, 64, 69, 74],
        backgroundColor: "#A78BFA",
      },
    ],
  };

  const conversionData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Conversions",
        data: [260, 360, 540, 700, 910, 1200],
        backgroundColor: "#10B981",
      },
    ],
  };

  // ------------------------------------------------
  // OPTIONS (Separate for Line & Bar)
  // ------------------------------------------------
  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    scales: {
      y: { beginAtZero: true, grid: { color: "#e5e7eb" } },
      x: { grid: { display: false } },
    },
  };

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
    },
    scales: {
      y: { beginAtZero: true, grid: { color: "#e5e7eb" } },
      x: { grid: { display: false } },
    },
  };

  return (
    <section className="w-full container py-10 sm:py-15 lg:py-20 bg-white" id="sixth-section">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">
          Content Performance Metrics
        </h2>

        <p className="text-gray-600">
          Click on different data points to explore how content drives results
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-6">
          <div className="bg-gray-100 px-3 py-2 rounded-full flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1 rounded-full text-sm font-medium transition ${
                  activeTab === tab ? "bg-white shadow text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Chart with re-mount animation */}
        <div
          key={activeTab} // 🔥 VERY IMPORTANT → re-renders chart = animation!
          className="mt-10 bg-white p-6 rounded-xl shadow-md animate-fadein"
        >
          {activeTab === "Traffic Growth" && (
            <Line data={trafficData} options={lineOptions} />
          )}

          {activeTab === "Engagement" && (
            <Bar data={engagementData} options={barOptions} />
          )}

          {activeTab === "Conversions" && (
            <Bar data={conversionData} options={barOptions} />
          )}
        </div>

        {/* Subtext */}
        <p className="text-gray-600 mt-6">
          {activeTab === "Traffic Growth" &&
            "Quality content consistently attracts more organic visitors month over month"}
          {activeTab === "Engagement" &&
            "Engaging content keeps visitors on your site longer, signaling quality to search engines"}
          {activeTab === "Conversions" &&
            "Strategic content doesn't just attract visitors—it converts them into customers"}
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-[#1a2233] rounded-xl p-6 text-center">
            <p className="text-orange-500 text-3xl font-bold">333%</p>
            <p className="text-white mt-1 text-sm">Organic Traffic Growth</p>
          </div>

          <div className="bg-[#1a2233] rounded-xl p-6 text-center">
            <p className="text-orange-500 text-3xl font-bold">4:32</p>
            <p className="text-white mt-1 text-sm">Avg. Time on Page</p>
          </div>

          <div className="bg-[#1a2233] rounded-xl p-6 text-center">
            <p className="text-orange-500 text-3xl font-bold">2.3%</p>
            <p className="text-white mt-1 text-sm">Conversion Rate</p>
          </div>

          <div className="bg-[#1a2233] rounded-xl p-6 text-center">
            <p className="text-orange-500 text-3xl font-bold">3.8</p>
            <p className="text-white mt-1 text-sm">Pages per Session</p>
          </div>
        </div>
      </div>

      {/* Add fade-in animation */}
      <style jsx>{`
        .animate-fadein {
          animation: fadein 0.6s ease;
        }
        @keyframes fadein {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
