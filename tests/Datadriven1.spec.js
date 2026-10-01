/*datadriven testing : achieved by looping through the data set (json, array)
// separete block will be generated for each record
* */
import{test, expect} from '@playwright/test'
let logindata=require('./logindata.json')
// for each loop
logindata.forEach(function(data)
{
    test('Login test with '+ data.username + 'and' + data.password,
        async function({page})
        {
            await page.goto("http://www.mycontactform.com")
            await page.locator("#user").fill(data.username)
            await page.locator("#pass").fill(data.password)
            await page.locator("#right_col_top > form > div > input").click()
            if(data.result==='sucess')
            {
                console.log("passed")
                await expect(page).toHaveURL(/panel/)
            }
            else
                {
                    console.log("failed")
                }
        }
    )
})