import React from 'react'
import TechStore from './TechStore/TechStore'
import Navbar from './LandingPage/Navbar'
import FAQ from './LandingPage/FAQ'
import Footer from './LandingPage/Footer'


const TechStorePage = () => {
  return (
    <header>
    <Navbar />
    {/* Main Body */}
      <TechStore />
    {/* Body Ends */}
    <FAQ />
    <Footer />      
    </header>
  )
}

export default TechStorePage