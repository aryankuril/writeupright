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
import SeventhSection from "./components/SeventhSection";
import Footer from './components/Footer';


export default function Home() {

  return (
    <main>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <GallerySection />
      <SeventhSection/>
      <ThirdSection />
      <ForthSection />
      <Fifthsection />
      <SixthSection />
      <Footer />
    </main>
  );
}
