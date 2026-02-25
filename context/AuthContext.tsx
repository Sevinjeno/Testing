"use client ";

import { createContext, useContext, useState } from "react";


interface AuthContextType {
  token: string | null;  
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token");
  });


  const login =(NewToken:string)=>{
    localStorage.setItem("token",NewToken)
    setToken(NewToken)
  }

  const logout =()=>{
    localStorage.removeItem("token")
    setToken(null)
  }


return (

   <AuthContext.Provider value={{token,login,logout}}>
    {children}
   </AuthContext.Provider>

)

};

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
