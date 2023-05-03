import './App.scss';
import { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { SignedOutPages } from './Navigation.jsx';

export const EndPointContext = createContext()

function App() { 
  const [blogs, setBlogs] = useState([])
  const [blogError, setBlogError] = useState(200)
  return (
    <EndPointContext.Provider value={[
      blogs, setBlogs,
      blogError, setBlogError
    ]}>
      <div className="App">
        <RouterProvider router={SignedOutPages} />
      </div>
    </EndPointContext.Provider>
  );
}

export default App;