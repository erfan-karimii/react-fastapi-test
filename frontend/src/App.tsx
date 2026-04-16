import "./assets/styles/app.css"
import { ScrollRestoration } from "react-router-dom";
import { Header, Footer } from "./components/";
import AllRouts from "./Routs";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="container mt-5">
      <AuthProvider>
        <CartProvider>
            <Header />
              <AllRouts/>
            <Footer />
        </CartProvider>
      </AuthProvider>
      <ScrollRestoration />
    </div>
  )
}

export default App
