import{test} from '@playwright/test'
test('screenshot', async({page})=>{
   //visiting 
   await  page.goto("http://www.google.com")
//linktext:  word/group of words-> click=> new url will be opened
await page.getByText('About').click()
   await page.waitForTimeout(4000)
   await page.screenshot({path:'full.png',fullPage:true})
    await page.waitForTimeout(2000)
   //close
   await page.close()
})