import {test,expect} from '@playwright/test'
test.only('To have screenshot element  -baseline image creation ', async({page})=>{
    await page.goto("https://www.facebook.com")
   
    await page.waitForTimeout(3000)
    //creating baseline image for username field in facebook page 
     let user= await page.locator("//*[@name='email']")
   // 
   //storing in base2.png
    await expect(user).toHaveScreenshot('base2.png')
    await page.waitForTimeout(3000)
//comparing with baseline image
    await user.fill("Dhivya")
    expect(await user.screenshot()).toMatchSnapshot('base2.png')
    await page.waitForTimeout(3000)
    await page.close()
})