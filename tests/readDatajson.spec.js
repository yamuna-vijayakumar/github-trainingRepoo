import{test}from "@playwright/test"
import{data1,data2,data3}from"../testData/testDataJSON.json"
let id=0
for(const values of data3)
    
test("reading The Data from JSON",async({page})=>{
    //browser lauch
    await page.goto("https://www.demoblaze.com/")
    await page.locator("[id=login2]").click()
    //username/password
    await page.locator("[id=loginusername]").fill(data1.username)
    await page.locator('[id="loginpassword"]').fill(data1.password)
    //login
    await page.locator('[onclick="logIn()"]').click()
})




