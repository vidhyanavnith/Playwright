import {test} from '@playwright/test'
/*
hooks 
before all: executed only once before all the test cases started its execution
after all: executed only once, after all the test cases finished its execution
before each: executed before each test case
after each: executed after each test case 
before all
     before each  test case1     after each
     before each  test case2     after each
after all
*/
/*
hooks 
before all: executed only once before all the test cases started its execution
after all: executed only once, after all the test cases finished its execution
before each: executed before each test case
after each: executed after each test case 
before all: visiting 
     before each: title  test case1: click    after each: message
     
after all: closing 
*/
let page
test.beforeAll(async ({browser}) =>{
page =await browser.newPage()
await page.goto("https://www.google.com/")
})
//After all
test.afterAll(async()=>{
await page.close()
})
//Before each
test.beforeEach(async()=>{
console.log(await page.title())
})
//after each
test.afterEach(async()=>{
    console.log("after each")
})
test('clicking',async()=>{
await page.waitForTimeout(3000)
await page.getByText("About").click()
})