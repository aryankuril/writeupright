"use client";
import { useEffect } from "react";
import Navbar from './components/Navbar';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import GallerySection from './components/GallerySection';
import ThirdSection from "./components/ThirdSection";
import ForthSection from './components/ForthSection';
import Fifthsection from "./components/Fifthsection";
import SixthSection from "./components/SixthSection";
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // 🔥 Higher = slower + smoother (default is ~1.2)
      easing: (t) => 1 - Math.pow(1 - t, 3), // 🔥 Custom easing for buttery effect
      lerp: 0.05, // 🔥 Lower = smoother but slower catch-up
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);


  // 
  return (
    <main>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <GallerySection />
      <ThirdSection />
      <ForthSection />
      <Fifthsection />
      <SixthSection />
      <Footer />
    </main>
  );
}
