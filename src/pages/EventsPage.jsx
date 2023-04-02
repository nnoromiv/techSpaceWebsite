import React from 'react'
import Navbar from './LandingPage/Navbar';
import FAQ from './LandingPage/FAQ';
import Banner from './LandingPage/Banner';
import Footer from './LandingPage/Footer';
import EventBody from './EventsPage/EventBody'

const EventsPage = () => {
  return (
    <div className="EventsPage">
        <Navbar />
        {/* Main Body */}
            <EventBody />
        {/* Body Ends */}
        <FAQ />
        <Banner />
        <Footer />
    </div>
  )
}

export default EventsPage