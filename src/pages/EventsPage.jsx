import React from 'react'
import Navbar from './LandingPage/Navbar';
import FAQ from './LandingPage/FAQ';
import Banner from './LandingPage/Banner';
import Footer from './LandingPage/Footer';
import EventBody from './EventsPage/EventBody'
import EventCards from './EventsPage/EventCards';

const EventsPage = () => {
  return (
    <div className="EventsPage">
        <Navbar />
        {/* Main Body */}
            <EventBody />
            <EventCards />
        {/* Body Ends */}
        <FAQ />
        <Banner />
        <Footer />
    </div>
  )
}

export default EventsPage