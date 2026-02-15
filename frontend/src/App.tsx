import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"
import About from "./pages/AboutUs"
import Shop from "./pages/Shop"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  )
}

export default App
