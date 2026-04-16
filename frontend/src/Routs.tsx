import { Routes, Route  } from "react-router-dom";
import { Index, About, Shop, Cart, Single, Page404, Login, Verify } from "./pages/"


export default function AllRouts() {
  return (
    <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
    </Routes>
  )
}
