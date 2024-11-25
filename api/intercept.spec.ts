import { test, expect } from '@playwright/test';

test('intercept browser data', async ({page})=>{

    await page.route('**/posts', async (route, response) => {
        await route.fulfill({json: {
            "id": 101,
            "title": "my custom title",
            "body": "my custom body"
        }})
    })

    await page.goto('https://jsonplaceholder.typicode.com/posts')

    await page.pause()



})