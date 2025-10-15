import React from 'react'
import Header from '../components/Navbar'
import ProcessSection from '../components/WebDev/ProcessSection'
import Slider from '../components/WebDev/Slider'
import ForthSection from '../components/ForthSection'
import TechStackShowcase from '../components/WebDev/TechStackShowcase'
import SixthSection from '../components/SixthSection'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header/>
        <ProcessSection/>
        <Slider/>
        <ForthSection/>
        <TechStackShowcase/>
        <SixthSection/>
        <Footer/>
    </div>
  )
}

export default Index