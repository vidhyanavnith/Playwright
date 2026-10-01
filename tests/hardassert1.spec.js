import{test,expect} from '@playwright/test'
//hard assert:if assertion passed, it will proceed further 
test.skip('hard-asserts', async function({page})
{
    await page.goto("http://www.google.com")
    
    await page.waitForTimeout(2000)
    await expect(page).toHaveTitle('Google')
    console.log("bye")
    await page.waitForTimeout(3000)
    await page.close()
})
//soft assertion: if assertion fails, it will throw error
// but properly it will be terminated 
test('soft-asserts', async function({page})
{
    await page.goto("http://www.google.com")
    
    await page.waitForTimeout(2000)
    await expect.soft(page).toHaveTitle('Gyahoo')
    console.log("bye")
    await page.waitForTimeout(3000)
    await page.close()
})