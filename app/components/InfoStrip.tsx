"use client";

import React from "react";

interface InfoStripProps {
  title: string;
  description: string;
}

const InfoStrip: React.FC<InfoStripProps> = ({ title, description }) => {
  return (
    <div className="w-full bg-[#f5f5f5] py-6 px-4 rounded-xl mt-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default InfoStrip;
