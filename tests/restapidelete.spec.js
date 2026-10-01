import{test,expect} from '@playwright/test'
test('Delete Booking',async({request})=>{
    //generate token
    const authResponse=await request.post('https://restful-booker.herokuapp.com/auth',
        {
            data:{
                username:'admin',
                password:'password123'
            }
        }
    );
    const authData=await authResponse.json();
    const token= authData.token;
    //create booking
    const createResponse=await request.post('https://restful-booker.herokuapp.com/booking',
        {
        data:{
firstname:"vidhya",
lastname:"A",
totalprice:111,
depositpaid:true,
bookingdates:{
    checkin:'2026-06-01',
    checkout:'2026-07-01'
},
additionalneeds:"Breakfast"
}
});
const createData=await createResponse.json();
const bookingId = createData.bookingId;
console.log('BookingId:',bookingId)

//delete booking
const deleteResponse=await request.delete("https://restful-booker.herokuapp.com/booking/"+bookingId,
    {
        headers:{
            Cookie:'token='+token
        }
    }

);
console.log('Delete Status:',deleteResponse.status());
console.log(deleteResponse.statusText())
expect(deleteResponse.status()).toBe(201);

});