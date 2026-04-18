import { Routes, Route  } from "react-router-dom";
import { Index, About, Shop, Cart, Single, Page404, Login, Verify } from "./pages/"
import { Layout } from "./components/";


export default function AllRouts() {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />} >
          <Route path="/" element={<Index />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
        </Route>
    </Routes>
  )
}
