import{test,expect}from"@playwright/test"
 
test("Read dot env file",async function({page}){
    await page.goto()
    await page.locator("[id=login2]").click()
    await page.waitForTimeout(2000)
    //username/password
    await page.locator("[id=loginusername]").fill(process.env.USER_NAME)
     await page.waitForTimeout(2000)
    await page.locator('[id="loginpassword"]').fill(process.env.PASSWORD)
     await page.waitForTimeout(2000)
    //login
    await page.locator('[onclick="logIn()"]').click()
     await page.waitForTimeout(2000)

})