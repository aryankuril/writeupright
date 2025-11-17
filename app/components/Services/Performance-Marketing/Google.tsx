// "use client";
// import React from "react";

// // ----------- REUSABLE COMPONENTS (local, clean, no duplicates) ------------

// // Card wrapper
// function Card({
//   children,
//   className = "",
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   return (
//     <div className={`rounded-xl border bg-white p-4 shadow-sm ${className}`}>
//       {children}
//     </div>
//   );
// }

// // Simple metric item
// function Metric({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="text-center bg-white p-3 rounded-lg shadow-sm border">
//       <h4 className="text-sm font-medium text-gray-700">{label}</h4>
//       <p className="text-xs text-gray-500 mt-1">{value}</p>
//     </div>
//   );
// }

// // Small stat item
// function SmallStat({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="bg-white rounded-lg p-3 border text-center shadow-sm">
//       <div className="text-xs font-medium text-gray-600">{label}</div>
//       <div className="text-sm text-gray-800 mt-1">{value}</div>
//     </div>
//   );
// }

// // Panel wrapper
// function Panel({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="w-full p-6 bg-white rounded-xl shadow border">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
//       {children}
//     </div>
//   );
// }

// // Campaign performance block
// function CampaignPerformance() {
//   return (
//     <div className="bg-white border rounded-xl p-4 shadow-sm">
//       <h4 className="text-sm font-medium text-gray-700 mb-3">
//         Campaign Performance
//       </h4>
//       <div className="space-y-3 text-sm">
//         <div className="flex justify-between">
//           <span>CTR</span>
//           <span>4.2%</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Conversion Rate</span>
//           <span>12.5%</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Cost / Conversion</span>
//           <span>$24.50</span>
//         </div>
//         <div className="flex justify-between">
//           <span>ROAS</span>
//           <span>4.8x</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------- MAIN COMPONENT ----------
// export default function GoogleAdsSection() {
//   return (
//     <Panel title="Google Ads: Search & Display">
//       <div className="space-y-8">
//         {/* SEARCH INTENT SECTION */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border">
//           <h3 className="text-lg font-semibold text-gray-700 mb-1">
//             Search Intent: Connect at the Moment of Need
//           </h3>
//           <p className="text-sm text-gray-500 mb-6">
//             Reach customers actively searching for solutions like yours
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <Card className="p-5 text-center bg-indigo-50">
//               <div className="text-blue-600 text-3xl font-bold mb-2">1</div>
//               <h4 className="font-medium text-gray-700">User Searches</h4>
//               <p className="text-sm text-gray-500 mt-1">
//                 "best running shoes for marathons"
//               </p>
//             </Card>

//             <Card className="p-5 text-center bg-indigo-50/70">
//               <div className="text-blue-600 text-3xl font-bold mb-2">2</div>
//               <h4 className="font-medium text-gray-700">Your Ad Appears</h4>
//               <p className="text-sm text-gray-500 mt-1">
//                 Premium marathon shoes – Free shipping & returns
//               </p>
//             </Card>

//             <Card className="p-5 text-center bg-pink-50">
//               <div className="text-pink-600 text-3xl font-bold mb-2">3</div>
//               <h4 className="font-medium text-gray-700">User Converts</h4>
//               <p className="text-sm text-gray-500 mt-1">
//                 Click → Visit → Purchase
//               </p>
//             </Card>
//           </div>

//           {/* Bottom metrics */}
//           <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//             <div className="text-sm text-gray-600">
//               90% of online experiences start with search
//             </div>
//             <div className="text-sm text-gray-600">
//               8.5B searches per day on Google
//             </div>
//             <div className="text-sm text-gray-600">
//               2x higher conversion than display ads
//             </div>
//           </div>
//         </div>

//         {/* DISPLAY NETWORK SECTION */}
//         <div className="bg-white p-6 rounded-xl shadow-sm border">
//           <h3 className="text-lg font-semibold text-gray-700 mb-1">
//             Display Network: Massive Reach Across the Web
//           </h3>
//           <p className="text-sm text-gray-500 mb-6">
//             Your ads appear on 2M+ websites & apps reaching 90% of internet
//             users
//           </p>

//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* GRAPH VISUAL */}
//             <div className="flex-1">
//               <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6 relative">
//                 <div className="h-48 w-full bg-white/60 rounded-lg flex items-center justify-center relative">
//                   {/* Center Node */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold shadow">
//                     Your Ad
//                   </div>

//                   {/* Nodes */}
//                   <div className="absolute top-4 left-10 bg-white shadow rounded-full px-4 py-1 text-xs">
//                     Mobile Apps
//                   </div>
//                   <div className="absolute bottom-4 left-10 bg-white shadow rounded-full px-4 py-1 text-xs">
//                     Gaming
//                   </div>
//                   <div className="absolute top-4 right-10 bg-white shadow rounded-full px-4 py-1 text-xs">
//                     Video Sites
//                   </div>
//                   <div className="absolute bottom-4 right-20 bg-white shadow rounded-full px-4 py-1 text-xs">
//                     Blogs
//                   </div>
//                   <div className="absolute bottom-1/2 right-4 translate-y-1/2 bg-white shadow rounded-full px-4 py-1 text-xs">
//                     E-commerce
//                   </div>
//                 </div>
//               </div>

//               {/* Small stats */}
//               <div className="mt-4 grid grid-cols-2 gap-4">
//                 <SmallStat label="Network Reach" value="2M+ Websites & Apps" />
//                 <SmallStat
//                   label="Creative"
//                   value="Visual Storytelling & Retargeting"
//                 />
//               </div>
//             </div>

//             {/* Campaign performance */}
//             <div className="lg:w-72">
//               <CampaignPerformance />
//             </div>
//           </div>
//         </div>
//       </div>
//     </Panel>
//   );
// }
