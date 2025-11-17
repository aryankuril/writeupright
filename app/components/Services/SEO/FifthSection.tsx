import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedTextButton from "../../button";

type Node = { id: string; label: string };

export default function FifthSection() {
  const nodes: Node[] = [
    { id: "forbes", label: "Forbes" },
    { id: "techcrunch", label: "TechCrunch" },
    { id: "industry", label: "Industry Blog" },
    { id: "news", label: "News Outlet" },
    { id: "twitter", label: "Twitter" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "partner", label: "Partner Site" },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [authority, setAuthority] = useState(75);
  const [center, setCenter] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [positions, setPositions] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const [showLines, setShowLines] = useState(false);

  // Authority animation
  useEffect(() => {
    if (showLines) {
      let start = 75;
      const end = 100;
      const duration = 1200;
      const startTime = performance.now();

      function animate(time: number) {
        const progress = Math.min((time - startTime) / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        setAuthority(value);
        if (progress < 1) requestAnimationFrame(animate);
      }

      requestAnimationFrame(animate);
    } else {
      setAuthority(75);
    }
  }, [showLines]);

  // Compute circle positions (with mobile responsive radius)
  useEffect(() => {
    function compute() {
      const el = containerRef.current;
      if (!el) return;
      const { width, height } = el.getBoundingClientRect();

      const cx = width / 2;
      const cy = height / 2;
      setCenter({ x: cx, y: cy });

      // RESPONSIVE radius
      const radius =
        width < 500
          ? width / 2.4 // small mobile radius
          : Math.min(width, height) / 2 - 80;

      const angleStep = (Math.PI * 2) / nodes.length;
      const next: Record<string, { x: number; y: number }> = {};

      nodes.forEach((n, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        next[n.id] = {
          x: cx + Math.cos(angle) * radius,
          y: cy + Math.sin(angle) * radius,
        };
      });

      setPositions(next);
    }

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <section className="w-full flex flex-col items-center container py-10 sm:py-15 lg:py-20 relative">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold text-black">
        Backlink Builder Visualization
      </h2>
      <p className="text-gray-600 mb-12 text-center max-w-xl">
        Watch how authoritative sites link back to build your domain authority
      </p>

      <div
        ref={containerRef}
        className="
          relative 
          w-full 
          max-w-[900px] 
          lg:h-[700px] 
          h-[500px]
          flex 
          items-center 
          justify-center 

          /* MOBILE FIX */
          sm:h-[600px]
          xs:h-[500px]
          max-xs:h-[480px]
        "
      >
        {/* SVG lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {nodes.map((n) => {
            const p = positions[n.id];
            if (!p) return null;

            const x1 = center.x;
            const y1 = center.y;
            const x2 = p.x;
            const y2 = p.y;

            const dx = x2 - x1;
            const dy = y2 - y1;
            const dist = Math.sqrt(dx * dx + dy * dy);

            return (
              <motion.line
                key={`line-${n.id}`}
                x1={showLines ? x2 : x1}
                y1={showLines ? y2 : y1}
                x2={x1}
                y2={y1}
                stroke="#1a2233"
                strokeWidth={2.5}
                strokeLinecap="round"
                initial={{
                  strokeDasharray: `${dist} ${dist}`,
                  strokeDashoffset: dist,
                }}
                animate={{
                  strokeDashoffset: showLines ? 0 : dist,
                }}
                transition={{
                  duration: 0.9 + dist / 500,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        {/* Center Card */}
        <div
          className="
            absolute 
            bg-[#1a2233] 
            text-white 
            shadow-2xl 
            rounded-2xl 
            px-10 
            py-6 
            text-center 
            z-20

            /* MOBILE SIZE */
            max-sm:px-2 
            max-sm:py-3
          "
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
          }}
        >
          <h3 className="text-lg max-sm:text-base font-bold">Your Website</h3>
          <p className="text-sm max-sm:text-xs font-medium opacity-90">
            Domain Authority: {authority}
          </p>
        </div>

        {/* Nodes */}
        {nodes.map((n) => {
          const p = positions[n.id];
          if (!p) return null;

          return (
            <motion.div
              key={n.id}
              className="
                absolute 
                bg-white 
                shadow-md 
                rounded-lg 
                flex 
                items-center 
                justify-center 
                text-gray-700 
                z-10

                /* DESKTOP */
                w-36 
                h-20
                text-sm

                /* MOBILE */
                max-sm:w-28 
                max-sm:h-16 
                max-sm:text-[11px]
                max-xs:w-24
                max-xs:h-14
                max-xs:text-[10px]
              "
              style={{
                left: `${p.x - 70}px`,
                top: `${p.y - 60}px`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              {n.label}
            </motion.div>
          );
        })}
      </div>

      <AnimatedTextButton
        onClick={() => setShowLines((s) => !s)}
        text="Visualize Backlinks →"
        className="mt-6 bg-[#0a253b] border-2 border-white text-white"
      />

      <p className="text-xs text-gray-400 mt-4">Click again to hide</p>
    </section>
  );
}
