import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"
import About from "./pages/AboutUs"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App
