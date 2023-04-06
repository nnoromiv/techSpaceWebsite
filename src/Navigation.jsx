import { createBrowserRouter } from 'react-router-dom';
import './App.scss'
import BlogPage from './pages/BlogPage';
import EventsPage from './pages/EventsPage';
import LandingPage from './pages/LandingPage';

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
  }
])
