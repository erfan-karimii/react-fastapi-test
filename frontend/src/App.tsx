import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Index from "./pages/index"
import About from "./pages/AboutUs"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart";
import Single from "./pages/Single";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single" element={<Single />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
