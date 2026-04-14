/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  qty: number;
}

interface CartContextType {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeItem: (id: CartItem["id"]) => void;
  updateQty: (id: CartItem["id"], qty: number) => void;
  clearCart: () => void;
}

export const  CartContext = createContext<CartContextType | null>(null);

const CART_KEY = "myapp:user_cart:v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addItem: CartContextType["addItem"] = (item) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + (item.qty ?? 1) } : i
        );
      }
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
  };

  const removeItem: CartContextType["removeItem"] = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQty: CartContextType["updateQty"] = (id, qty) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, qty) } : i
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside a <CartProvider>");
  }
  return ctx;
}
