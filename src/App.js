import './App.scss';
import MyCarousel from './pages/MyCarousel';
import Content from './pages/Content';
import Navbar from './pages/Navbar';
import Partners from './pages/Partners';
import Aboutus from './pages/Aboutus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <MyCarousel />
      <Partners />
      <Aboutus />
    </div>
  );
}

export default App;
