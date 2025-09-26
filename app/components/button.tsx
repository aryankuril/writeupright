'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface AnimatedTextButtonProps {
  text: string;
  href: string;
  className?: string;
}

const AnimatedTextButton: React.FC<AnimatedTextButtonProps> = ({ text, href, className }) => {
  const [hovered, setHovered] = useState(false);
  const chars = text.split("").map((char) => (char === " " ? "\u00A0" : char));

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center px-5 py-3 border border-white rounded-[32px] uppercase text-white font-sans text-base overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="flex">
        {chars.map((char, idx) => (
          <span
            key={idx}
            className="relative block overflow-hidden h-6 w-auto"
            style={{ transitionDelay: `${idx * 30}ms` }}
          >
            <span
              className={`block transition-transform duration-300 ease-in-out ${
                hovered ? "-translate-y-6" : "translate-y-0"
              }`}
            >
              {char}
            </span>
            <span
              className={`block absolute left-0 top-0 transition-transform duration-300 ease-in-out ${
                hovered ? "translate-y-0" : "translate-y-6"
              }`}
            >
              {char}
            </span>
          </span>
        ))}
      </span>
    </Link>
  );
};

export default AnimatedTextButton;
