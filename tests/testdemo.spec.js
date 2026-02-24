import{test,expect}from'@playwright/test'
test("handling testdemo",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.fill('id=username','student')
    await page.fill('id=password','Password123')

    // await page.click('id=submit')
    //find locator in name 
    await page.getByRole('textbox',{name:'username'}).fill('student')
    await page.getByRole('textbox',{name:'password'}).fill('Password123')
    // //submit=no name

    //find locator using in class
    //username=no class
    //password=no class
    await page.click('.btn')
    
})


