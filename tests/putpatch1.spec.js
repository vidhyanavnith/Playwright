import { test, expect } from '@playwright/test';
test('Restful Booker - POST, PATCH and PUT', async ({ request }) => {
// Create Booking
    const bookingData = {
        firstname: 'Dhivya',
        lastname: 'Ksamy',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-06-01',
            checkout: '2026-07-01'
        },
        additionalneeds: 'Breakfast'
    };
    //console.log("original data ")
    console.log(bookingData)
    const createResponse = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: bookingData
        }
    );
    expect(createResponse.status()).toBe(200);
    const createResponseData = await createResponse.json();
    const bookingId = createResponseData.bookingid;
    console.log('Booking ID:', bookingId);
    // Generate Token
    const authResponse = await request.post(
        'https://restful-booker.herokuapp.com/auth',
        {
            data: {
                username: 'admin',
                password: 'password123'
            }
        }
    );
    expect(authResponse.status()).toBe(200);
    const authData = await authResponse.json();
    const token = authData.token;
    console.log('Token:', token);




    // PATCH - Update only totalprice
    const url='https://restful-booker.herokuapp.com/booking/' + bookingId
    const patchResponse = await request.patch(url,
        //`https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                Cookie: 'token=' + token
            },
            data: {
                totalprice: 1000
            }
        }
    );
    expect(patchResponse.status()).toBe(200);
    const patchData = await patchResponse.json();
    console.log('PATCH Response:', patchData);
    expect(patchData.totalprice).toBe(1000);

    
    // PUT - Replace entire booking
    const updatedBooking = {
        firstname: 'Divyakarthi',
        lastname: 'K',
        totalprice: 2000,
        depositpaid: false,
        bookingdates: {
            checkin: '2026-08-01',
            checkout: '2026-08-10'
        },
        additionalneeds: 'Lunch'
    };
    const putResponse = await request.put(
        `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        {
            headers: {
                Cookie: 'token=' + token
            },
            data: updatedBooking
        }
    );
    expect(putResponse.status()).toBe(200);
    const putData = await putResponse.json();
    console.log('PUT Response:', putData);
    expect(putData.firstname).toBe(updatedBooking.firstname);
    expect(putData.lastname).toBe(updatedBooking.lastname);
    expect(putData.totalprice).toBe(updatedBooking.totalprice);
    expect(putData.additionalneeds).toBe(updatedBooking.additionalneeds);
});