 "use client"

import LoginForm from "@/components/LoginForm"
import { LoginUser } from "@/services/authService"
import { useState } from "react"

const LoginPage = () => {
console.log("Parent Login Page");
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState("")
    const [token,setToken]=useState("")

 const handleLogin =async (email:string,password:string)=>{
  console.log("Handle Login Function");
      setLoading(true)
      setError("")
      try{
        const token= await LoginUser({email,password});
        setToken(token)
      }catch(err:unknown){
        setError(err instanceof Error?err.message : "Unexpected Error")
      }finally{
        setLoading(false)
      }

    }
    
    
     if(token){
      return <>Dashboard</>
     }


  return (
    <div>
      <LoginForm onSubmit={handleLogin} loading={loading} error={error} />
    </div>
  )

}


export default LoginPage;
