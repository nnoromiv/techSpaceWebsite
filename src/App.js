import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { SignedOutPages } from './Navigation';

function App() {
  return (
    <div className="App">
      <RouterProvider router={SignedOutPages} />
    </div>
  );
}

export default App;
