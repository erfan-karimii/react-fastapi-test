import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index"
import About from "./pages/AboutUs"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
