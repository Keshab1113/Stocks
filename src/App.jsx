import { useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Market from './components/Market';
import Error from './components/Error';
import './App.css'
import ShareData from './components/ShareData';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/sharedata" element={<ShareData/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
