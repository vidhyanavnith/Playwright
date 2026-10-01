import { test, expect } from '@playwright/test';
import fs from 'fs';
function writeLog(message) {
    fs.appendFileSync(
        './gp.txt',
        message + '\n',
        'utf8'
    );
}
test('GET Booking with Logging', async ({ request }) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    writeLog('====================================');
    writeLog('Execution Started');
    writeLog('Time: ' + new Date().toISOString());
    writeLog('Method: GET');
    writeLog('URL: ' + url);
    const response = await request.get(url);
    writeLog('Status Code: ' + response.status());
    writeLog('Status Text: ' + response.statusText());
    const responseBody = await response.json();
    writeLog('Response Body:');
    writeLog(JSON.stringify(responseBody, null, 2));
    writeLog('====================================');
    expect(response.status()).toBe(200);
});