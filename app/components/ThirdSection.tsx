"use client";

import { useEffect, useRef, useState } from "react";
import { motion} from "framer-motion";

const ThirdSection = () => {
    const [count, setCount] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [showControls, setShowControls] = useState<boolean>(false);
  
    const targetNumber = 920;
    const duration = 2000;
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCountAnimation();
              observer.disconnect(); // Run only once
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of section is visible
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const startCountAnimation = () => {
      let start: number | null = null;
  
      const animate = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const currentCount = Math.min(
          Math.floor((progress / duration) * targetNumber),
          targetNumber
        );
        setCount(currentCount);
  
        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };
  
      requestAnimationFrame(animate);
    };
  
    const handleMouseEnter = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => console.error("Video play failed:", error));
        setIsPlaying(true);
        setShowControls(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
        setShowControls(false);
      }
    };
  
    const togglePlayPause = () => {
      if (videoRef.current) {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play().catch((error) => console.error("Video play failed:", error));
        }
        setIsPlaying((prev) => !prev);
      }
    };
  
    useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
        const handleEnded = () => setIsPlaying(false);
        const handlePause = () => setIsPlaying(false);
        const handlePlay = () => setIsPlaying(true);
  
        videoElement.addEventListener("ended", handleEnded);
        videoElement.addEventListener("pause", handlePause);
        videoElement.addEventListener("play", handlePlay);
  
        return () => {
          videoElement.removeEventListener("ended", handleEnded);
          videoElement.removeEventListener("pause", handlePause);
          videoElement.removeEventListener("play", handlePlay);
        };
      }
    }, []);
  return (
    <section
      ref={sectionRef}
      className="container mx-auto max-w-7xl flex flex-col gap-10 py-10 sm:py-15 lg:py-20 px-5"
    >
      {/* Top Row */}
      <div className="container w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-20 md:items-center lg:items-left md:text-center xl:text-left text-left">
            <motion.p
     className="flex-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#010205] font-semibold leading-[100%] tracking-[-1.44px]"
      variants={{
        hidden: { opacity: 1 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {" Provide the best service with out of the box ideas".split(" ").map((word, i) => (
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
    </motion.p>


      <motion.div
className="flex-1 text-[15px] sm:text-[16px] text-[#878C91] mt-2 lg:mt-4 font-medium leading-[180%] max-w-2xl"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
       
          we are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of experience
          and a deep understanding of the ever-evolving online landscape, we stay at
          the forefront of industry trends and technologies.

        </motion.div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Black Card */}

<motion.div
  initial={{ opacity: 0, x: -100 }}   // start off-screen to the left
  whileInView={{ opacity: 1, x: 0 }}  // fade in and slide to position
  viewport={{ once: true, amount: 0.3 }} // trigger when 30% is visible
  transition={{ duration: 0.8, ease: "easeOut" }} // smooth animation
  className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[438px] h-60 sm:h-72 md:h-80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-xl mx-auto"
  style={{
    backgroundImage: "url('/images/smcard-bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black opacity-20 z-0 rounded-2xl"></div>

  <div className="relative z-10">
    <span className="text-white text-[84px] sm:text-5xl md:text-6xl font-bold leading-none">
      {count}
      <span className="text-[#99CF63]">+</span>
    </span>

    <p className="text-[#878C91] text-[19px] sm:text-base mt-2">
      Project finish with superbly
    </p>
  </div>

  <div className="relative z-10 flex items-center gap-2 mt-4 flex-wrap">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center"
      ></div>
    ))}
    <div className="w-10 h-10 sm:w-10 sm:h-10 flex items-center justify-center">
      <span className="text-gray-300 lg:-mr-3 lg:-mt-5 -mt-5 text-7xl">+</span>
    </div>
  </div>
</motion.div>


        {/* Video Section */}
<motion.div
  initial={{ opacity: 0, x: 100 }}     // start off-screen to the right
  whileInView={{ opacity: 1, x: 0 }}   // fade in & slide to position
  viewport={{ once: true, amount: 0.3 }} // trigger when 30% is visible
  transition={{ duration: 0.8, ease: "easeOut" }} // smooth motion
  className="relative w-full sm:w-[90%] md:w-[70%] lg:w-[818px] xl:w-[850px] h-60 sm:h-72 md:h-80 bg-gray-300 rounded-2xl shadow-xl flex items-center justify-center cursor-pointer mx-auto mt-6 lg:mt-0"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <video
    ref={videoRef}
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
  />
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <h2 className="text-white text-xl sm:text-3xl md:text-4xl font-bold tracking-widest opacity-80">
      HOW WE WORK
    </h2>
  </div>

  {/* Play/Pause Controls */}
  <div className="absolute -bottom-5 -right-5 flex flex-col items-center justify-center z-30">
    <img
      src={isPlaying ? "/images/pause.png" : "/images/play-button.png"}
      alt="play/pause"
      onClick={(e) => {
        e.stopPropagation();
        togglePlayPause();
      }}
      className="w-5 h-5 lg:w-8 lg:h-8 lg:ml-1 lg:-mb-17 -mb-11 cursor-pointer z-20"
    />
    <img
      src="/images/play-g.png"
      alt="Decorative"
      className="w-[70px] sm:w-[80px] md:w-[100px] h-auto object-contain cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        togglePlayPause();
      }}
    />
  </div>
</motion.div>

      </div>
    </section>
  )
}

export default ThirdSection