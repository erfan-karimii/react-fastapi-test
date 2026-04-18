import "./assets/styles/app.css"
import { ScrollRestoration } from "react-router-dom";
import AllRouts from "./Routs";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="container mt-5">
      <AuthProvider>
        <CartProvider>
          <AllRouts/>
        </CartProvider>
      </AuthProvider>
      <ScrollRestoration />
    </div>
  )
}

export default App
