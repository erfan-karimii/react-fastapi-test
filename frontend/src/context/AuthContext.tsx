/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProvider {
  user: string;
  setUser: (a:string)=>void;
}


export const AuthContext = createContext<null|AuthContextProvider>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("token") || "";
  });
  useEffect(() => {
    localStorage.setItem("token", user);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  const ctx = useContext(AuthContext);

  if (!ctx) {
    throw new Error("useAuth must be used within an <AuthProvider>");
  }
  return ctx;
}