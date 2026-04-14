import "./assets/styles/app.css"
import { ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "./components/";
import AllRouts from "./Routs";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <AllRouts/>
      </CartProvider>
      <Footer />
      <ScrollRestoration />
    </>
  )
}

export default App
