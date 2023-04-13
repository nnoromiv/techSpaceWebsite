import React from 'react'
import Navbar from './LandingPage/Navbar';
import FAQ from './LandingPage/FAQ';
import Banner from './LandingPage/Banner';
import Footer from './LandingPage/Footer';
import BlogBody from './BlogPage/BlogBody';

const BlogPage = () => {
  return (
    <header className="BlogPage">
        <Navbar />
        {/* Main Body */}
           <BlogBody />
        {/* Body Ends */}
        <FAQ />
        <Banner />
        <Footer />
    </header>
  )
}

export default BlogPage