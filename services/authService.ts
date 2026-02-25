import { LoginPayload } from "@/types/api/authTypes";

export const LoginUser=async (payload:LoginPayload)=>{


    const response = await fetch("api/login",{
           method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
        body :JSON.stringify(payload),

    })


    if(!response.ok){
        throw new Error ("Login failed")   
    }

    return response.json();

}