import {test,expect} from '@playwright/test'
// Alert with ok
test.skip('alert with ok',async function ({page})
 {
   await page.goto("https://testautomationpractice.blogspot.com/") 
   //To check Dialog Window handler
   page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect (dialog.message()).toContain("I am an alert box!")
    await page.waitForTimeout(3000)
    await dialog.accept()
   }) 
//clicking on alert
await page.locator("#alertBtn").click()
await page.waitForTimeout(3000)
})
//confirm box with ok and cancel button
test.skip('confirm box box with ok and cancel button',async function ({page})
 {
   await page.goto("https://testautomationpractice.blogspot.com/") 
   //To check Dialog Window handler
   page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect (dialog.message()).toContain("Press a button!")
    await page.waitForTimeout(3000)
    await dialog.accept()
   }) 
//clicking on confirm box
await page.locator("#confirmBtn").click()
await page.waitForTimeout(3000)
  })
//clicking on promp alert
test ('Prompt box', async function({page})
{
  await page.goto("https://testautomationpractice.blogspot.com/")
   //To check Dialog Window handler
   page.on('dialog',async dialog=>{
    expect(dialog.type).toContain('prompt')
    expect(dialog.message).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    awaitpage.waitForTimeout(3000)
    await dialog.accept("Vidhya")
    await page.waitForTimeout(3000)
   })
   //clicking on prompt box
   await page.locator('#promptBtn').click()
   await page.waitForTimeout(3000)
})