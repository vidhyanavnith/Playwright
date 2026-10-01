import test from'@playwright/test'
test('Element screenshot', async({page})=>{
   //visiting 
   await  page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

   await page.getByPlaceholder("Username").screenshot({path:'ele.png'})
   
   await page.waitForTimeout(5000)
   //close
   await page.close()
})
