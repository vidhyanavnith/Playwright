import {test} from '@playwright/test'
//single key up and down
//combination press
test('keyboard events', async function({page}){
    await page.goto("https://mycontactform.com/")
    await page.locator("#user").type("Hi")
    //ctrl+A
    await page.keyboard.press("Control+A")
    //ctrl+C
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)
    //tab for next field - password
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")
    //paste
    await page.keyboard.press("Control+V")
     await page.waitForTimeout(2000)
     //Tab -login button
     await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")
    //enter=> clciking
   await page.keyboard.down("Enter")
    await page.keyboard.up("Enter")
    await page.waitForTimeout(2000)
    await page.close()
})