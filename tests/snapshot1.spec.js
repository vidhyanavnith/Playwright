import{test,expect} from'@playwright/test'
test('tohavescreenshot', async function({page})
{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.waitForTimeout(4000)
        //create a base line image
        await expect(page).toHaveScreenshot('homepage.png');
        await page.waitForTimeout(4000)
        await page.getByPlaceholder('Username').fill("Admin")
        await page.waitForTimeout(3000);
        //cross checking 
        expect(await page.screenshot()).toMatchSnapshot('homepage.png')
         await page.waitForTimeout(4000)
        await page.close()
})