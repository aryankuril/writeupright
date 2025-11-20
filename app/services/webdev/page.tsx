"use client";
import React from 'react'
import Header from '../../components/Navbar'
import FirstSection from '../../components/Services/WebDev/FirstSection'
import ProcessSection from '../../components/Services/WebDev/ProcessSection'
import Slider from '../../components/Services/WebDev/Slider'
import Faq from '@/app/components/Services/WebDev/Faq';
import TechStackShowcase from '../../components/Services/WebDev/TechStackShowcase'
import SixthSection from '../../components/SixthSection'
import Footer from '../../components/Footer'

const Index = () => {
  return (
    <div>
        <Header/>
        <FirstSection/>
        <ProcessSection/>
        <Slider/>
        <Faq/>
        <TechStackShowcase/>
        <SixthSection/>
        <Footer/>
    </div>
  )
}

export default Index