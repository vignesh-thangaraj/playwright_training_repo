import { expect, test } from '@playwright/test';

test.describe('authenticate test', () =>{
    test('intercept network and overrride html content', async ({ page })=>{
        await page.route('**/logged-in-successfully*', async (route, response) => {
            console.log("URL=========",response.url())
            const overrideHtml =`
            <html>
            <body>
                <h1>I override the response using playwright</h1>
            </body>
            </html>`
            await route.fulfill({body: overrideHtml })
        })
        await page.goto('https://practicetestautomation.com/practice-test-login/')
        await page.locator('#username').fill('student')
        await page.locator('#password').fill('Password123')
        await page.locator('#submit').click()

        await page.pause()
        // const response = await responsePromise;
        // const body = await response.body()
        // console.log("responseeee=======", body.toString())
    })
    test('intercept network and override json content', async ({ page })=>{
        await page.route('https://randomuser.me/api/', async (route) => {
            const response = await route.fetch();
            const json = await response.json();
            const jsonOvveride = {
                ...json,
                "extraName": "extra_extra"
            }
            jsonOvveride['results'][0]['name']['first'] = 'vignesh'
            jsonOvveride['results'][0]['name']['last'] = 'thangaraj'
            await route.fulfill({json: jsonOvveride })
        })
        await page.goto('https://randomuser.me/api/')
    })
})