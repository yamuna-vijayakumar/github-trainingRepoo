import{test,expect}from"@playwright/test"
import { request } from "node:http"
test.only("GET ALL USERS using GST RESQEST",async({request})=>{
    const response=await request.get("https://dummyjson.com/docs/users")
    let body = response.json()
    console.log(await body)
    //status code validation
    let statuscode=await responce.status()
    console.log(await statuscode)
    if (response.status()===200){
        console.log("sucessfull")
    }
    else{
            console.log("un successful")
        }
    
})
let token
test("LOGIN WITH CREDENTIALS using POST Reqest",async({request})=>{
    const response=await request.post("https://dummyjson.com/user/login",{
        data:{
            "username": "emilys",
            password: "emilyspass"
        },
        headers:{
            "Content-Type": "application/json"

        }
    })
    const body=await response.json()
    console.log(await body)
    await expect(response.status()).toBe(200)
    token=await body.accessToken
})

test("GET CURRENT AUTHENTICATION USER using GET Request",async({request})=>{
    const response=await request.get("https://dummyjson.com/user/me",{
        headers:{
            "Authorization": "Bearer "+token
        }
    })
    const body=await response.json()
    console.log(await body)
    await expect(response.status()).toBe(200)
})
test("ADD NEW USING usin POST Request",async({request})=>{
    const response = await request.post("https://dummyjson.com/users/add",{
        headers:{
            "Content-Type": "application/json"
        },
        data:{
           firstName: 'Muhammad',
           lastName: 'Ovi',
            age: 250
        }
    })
    const body = await response.json()
    console.log(await body)
    await expect(response.status()).toBe(201)
})
// test.skip("GET CREATE USER DEATILS using GET Request",async({request})=>{
//     const res=await request.get("https://dummyjson.com/users/209",{
//         headers:{
//             "Content-Type: application/json"
//         }
//     })
//     const body=await res.json()
//     await 
// })
test.only("UPDATE CREATE USER using PUT Request",async({request})=>{
   const res= await request.put("https://dummyjson.com/users/2",{
        headers:{
            "Content-Type": "application/json"
        },
        data:{
            firstName:"yamu",
            lastName:"na",
            age:25

        }
    })
    const body=await res.json()
    console.log(await body)
    await expect(res.status()).toBe(200)
})
test("DELETE USER using DELETERequest",async({request})=>{
    const res=await request.delete("https://dummyjson.com/users/9",{
        headers:{
            "Content-Type": "application/json"
        }
    })
})