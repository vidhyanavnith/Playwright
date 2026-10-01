import {test} from '@playwright/test'
test('masking', async({page})=>{
   //visiting 
   await  page.goto("https://example.com/")

   let ele= await page.locator("body > div > h1")
 await page.waitForTimeout(3000)
   await page.screenshot({
    path:'m.png',
    mask:[ele],
    maskColor:'#FFFF00'
   })
   await page.waitForTimeout(4000)
   await page.close();
})
