import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css';


import { RouterProvider } from 'react-router-dom';
import basicRouter from './routes/basicRouter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={basicRouter} />
  );
}

export default App
