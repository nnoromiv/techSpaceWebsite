import './App.scss';
import { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom';
import { SignedOutPages } from './Navigation';

export const EndPointContext = createContext()

function App() { 
  const [blogs, setBlogs] = useState([])
  return (
    <EndPointContext.Provider value={[
      blogs, setBlogs,
    ]}>
      <div className="App">
        <RouterProvider router={SignedOutPages} />
      </div>
    </EndPointContext.Provider>
  );
}

export default App;
