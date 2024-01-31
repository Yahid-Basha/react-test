import { useState } from "react"
import {Routes, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Rose from '../public/Rose.jsx'
function App(props) {
  const [a ,setA] = useState(0)
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Rose />} />
    </Routes>

  )
}
export default App
