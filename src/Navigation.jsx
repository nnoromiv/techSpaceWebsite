import { createBrowserRouter } from 'react-router-dom';
import './App.scss'
import AboutUsPage from './pages/AboutUsPage.jsx';
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import LandingPage from './pages/LandingPage';
import TechStorePage from './pages/TechStorePage.jsx';
import { LoginPage, SignupPage } from './pages/AuthPages';

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
  },
  {
    path: 'login',
    element: (<LoginPage />)
  },
  {
    path: 'signup',
    element: (<SignupPage />)
  }
])
