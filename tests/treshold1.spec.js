import {test, expect} from '@playwright/test'

test('fixing threshold limit ', async({page})=>{
   //visiting 
   await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


  await expect(page).toHaveScreenshot(
    {
        path:'ap.png',
        threshold:0.3,
        maxDiffPixels:200
    }
  )
   
   await page.waitForTimeout(5000)
   //close
   await page.close()
})