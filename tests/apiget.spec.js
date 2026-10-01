import {test,expect} from'@playwright/test'
import { request } from 'node:http'
//get call
test('get call validation',async({request})=>{
let start= Date.now()
let res= await request.get("https://jsonplaceholder.typicode.com/posts/1")
let end=Date.now()
//response time calculation
console.log("response time is", (end-start))
//response time validation
expect(end-start).toBeLessThan(3000)
//displaying the response body
console.log(await res.body())
//json - to get readable format result
let content=await res.json()
console.log(content)
//response schema validation
expect(content.title).toContain("sunt")
expect(content.id).toBe(1)
expect(content.userId).not.toBeNull()
expect(content).toHaveProperty('body')
expect(content).toHaveProperty('title')
expect(content).toHaveProperty('id')
expect(content).toHaveProperty('userId')

//fetching headers
console.log(res.headersArray())

//status validation
let status = res.status()
console.log("status code is", status)
expect(status).toBe(200)

//status text validation
let s=res.statusText()
console.log("Status text is",s)
expect(s).toBe("OK")
})
