"use client";
import React from 'react'
import Header from '../../components/Navbar'
import FirstSection from '../../components/Services/SEO/FirstSection'
import SecondSection from '@/app/components/Services/SEO/SecondSection'
import ThirdSection from '@/app/components/Services/SEO/ThirdSection';
import ForthSection from '@/app/components/Services/SEO/ForthSections';
import FifthSection from '@/app/components/Services/SEO/FifthSection';
import SixthSection from '@/app/components/Services/SEO/SixthSection';
import SeventhSection from '@/app/components/Services/SEO/SeventhSection';
import EightSection from '@/app/components/Services/SEO/EightSection';
import Footer from '../../components/Footer'

const Index = () => {
  return (
    <div>
        <Header/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <ForthSection/>
        <FifthSection/>
        <SeventhSection/>
        <SixthSection/>
        <EightSection/>
        <Footer/>
    </div>
  )
}

export default Index