import {test, expect} from '@playwright/test'
test('post-with token authentication', async({request})=>{
    let d={
        
    "username" : "admin",
    "password" : "password123"
    }
    let start=Date.now()
        let res=await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type": "application/json"},data:d})
        let end=Date.now()
        // response time calculation
        console.log("response time is ", (end-start))
        // response time validation
        expect(end-start).toBeLessThan(3000)
    
        // displaying the response body
        console.log(await res.body())

        // json 
        let content=await res.json()
        console.log(content)
    
        //response shcme validation
        console.log("totken is ",content.token)
        expect(content.token).not.toBeNull()
    
        //fetching headers
        console.log(res.headersArray())
    
        //status validation
        let st=res.status()
        console.log("status code is ", st)
        expect(st).toBe(200)
    
        //status text validation
        let s= res.statusText()
        console.log("Status text is ", s)
        expect(s).toBe("OK")
    
    
    
})