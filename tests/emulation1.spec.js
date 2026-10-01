import{test} from '@playwright/test'
test('mobile emulation',async function({page}){
await page.goto("https://www.google.com/")
await page.waitForTimeout(3000)
await page.close()
})