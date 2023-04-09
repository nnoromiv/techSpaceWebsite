import { createBrowserRouter } from 'react-router-dom';
import './App.scss'
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import LandingPage from './pages/LandingPage';
import TechStorePage from './pages/TechStorePage';

export const SignedOutPages = createBrowserRouter([
  {
    path: '/',
    element: (<LandingPage />)
  },
  {
    path: 'events',
    element: (<EventsPage />)
  },
  {
    path: 'blogs',
    element: (<BlogPage />)
  },
  {
    path: 'tech-store',
    element: (<TechStorePage />)
  },
  {
    path: 'gallery',
    element: (<GalleryPage />)
  },
  {
    path: 'about-us',
    element: (<AboutUsPage />)
  }
])
