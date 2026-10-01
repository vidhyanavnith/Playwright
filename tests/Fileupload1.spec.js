import {test} from "@playwright/test"
test('File uploading',async function ({page})
{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php" )
await page.locator("#filesToUpload").setInputFiles('C:\\Users\\Navaneeth\\Downloads\\Navaneeth.png')
    })
