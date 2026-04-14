import "./assets/styles/app.css"
import { Routes, Route , ScrollRestoration } from "react-router-dom";

import { Header, Footer } from "./components/";

import { Index, About, Shop, Cart, Single, Page404 } from "./pages/"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ScrollRestoration />
      <Footer />
    </>
  )
}

export default App
