// Mock Fetch API

import { LoginUser } from "../authService"


describe("authService - LoginUser",()=>{


      // on success 

    it("Should return data on successful login",async()=>{

        global.fetch=jest.fn(()=>Promise.resolve({
             ok:true,
             json:()=>Promise.resolve({token:"fake-token"}),        
        }as Response))
    
        
        const result=await LoginUser({
            email:"test@test.com",
            password:"123456",
        })

        expect(result).toEqual({token:"fake-token"})
        expect (fetch).toHaveBeenCalledTimes(1)

    })

    // on failure 

     it("should throw error when response is not ok", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
      } as Response)
    )

    await expect(
      LoginUser({
        email: "wrong@test.com",
        password: "wrong",
      })
    ).rejects.toThrow("Login failed")
  })






})