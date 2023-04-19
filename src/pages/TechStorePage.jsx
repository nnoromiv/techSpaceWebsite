import React from 'react'
import TechBanner from './TechStore/TechBanner'
import Navbar from './LandingPage/Navbar'
import FAQ from './LandingPage/FAQ'
import Footer from './LandingPage/Footer'


const TechStorePage = () => {
  return (
    <header>
    <Navbar />
    {/* Main Body */}
      <TechBanner />
    {/* Body Ends */}
    <FAQ />
    <Footer />      
    </header>
  )
}

export default TechStorePage