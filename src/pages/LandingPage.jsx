import MyCarousel from './LandingPage/MyCarousel';
import Content from './LandingPage/Content';
import Navbar from './LandingPage/Navbar';
import Partners from './LandingPage/Partners';
import Aboutus from './LandingPage/Aboutus';
import Stacks from './LandingPage/Stacks';
import Blog from './LandingPage/Blog';
import FAQ from './LandingPage/FAQ';
import Banner from './LandingPage/Banner';
import Footer from './LandingPage/Footer';

function LandingPage() {
  return (
    <header className="LandingPage">
      <Navbar />
      <Content />
      <MyCarousel />
      <Partners />
      <Aboutus />
      <Stacks />
      <Blog />
      <FAQ />
      <Banner />
      <Footer />
    </header>
  );
}

export default LandingPage;
