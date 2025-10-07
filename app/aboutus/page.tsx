import React from 'react'
import Navbar from '../components/Navbar';
import FirstSection from '../components/aboutus/FirstSection'
import SecondSection from '../components/aboutus/SecondSection';
import ThirdSection from '../components/aboutus/ThirdSection';
import ForthSections from '../components/aboutus/ForthSections';
import ForthSection from '../components/ForthSection';
import SixthSection from '../components/SixthSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <ForthSections/>
        <ForthSection/>
        <SixthSection/>
        <Footer/>
    </div>
  )
}

export default Index