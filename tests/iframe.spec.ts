// import { test } from '@playwright/test';
import { test } from '../testFixtures';


test.describe('Iframe test', () =>{
    test('get text from Iframe', async ({page, homePage })=>{
        await page.pause()
        await page.goto('https://demo.automationtesting.in/Frames.html');
        await page.locator('a[href="#Multiple"]').click()
        const firstFrame = page.frameLocator('iframe[src="MultipleFrames.html"]')
        const secondFrame = await firstFrame.frameLocator('iframe[src="SingleFrame.html"]:nth-child(2)').getByText('iFrame Demo').click()
    })
})
