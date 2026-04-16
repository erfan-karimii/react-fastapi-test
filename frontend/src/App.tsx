import "./assets/styles/app.css"
import { ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "./components/";
import AllRouts from "./Routs";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className="container mt-5">
      <CartProvider>
        <Header />
        <AllRouts/>
      </CartProvider>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default App
