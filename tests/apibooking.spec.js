import {test, expect} from '@playwright/test'
test('post-with booking id', async({request})=>{
    let d={
        
   "firstname" : "Dhivya",
    "lastname" : "karthi",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-11-01",
        "checkout" : "2026-11-04"
    },
    "additionalneeds" : "Dinner"
}
    let start=Date.now()
        let res=await request.post("https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type": "application/json"},data:d})
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
    
        //schema validation
        console.log("bookig id is ", content.bookingid)
        expect(content.bookingid).not.toBeNull()
       
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

