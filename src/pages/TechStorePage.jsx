import TechBanner from './TechStore/TechBanner.jsx'
import Navbar from './LandingPage/Navbar'
import FAQ from './LandingPage/FAQ'
import Footer from './LandingPage/Footer'


const TechStorePage = () => {
  return (
    <header>
    <Navbar navActive='/tech-store'/>
    {/* Main Body */}
      <TechBanner />
    {/* Body Ends */}
    <FAQ />
    <Footer />      
    </header>
  )
}

export default TechStorePage