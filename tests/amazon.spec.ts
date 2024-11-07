import { expect } from '@playwright/test';
import { test } from '../testFixtures';
let laptopName = 'HP Newest Business'

test.describe('add an item in the shopping cart', () =>{
    test('search a product in amazon', async ({page, browserName, homePage})=>{
        console.log("browserName =======",browserName)
        const laptops = 'laptops'
        await (await (await homePage.searchProudct(laptops)).selectProduct(laptops)).validateCount(21)
        await page.locator('.puisg-row').getByText('128GB', {exact: false}).first().click()
        await expect(page.locator('#productTitle')).toBeEnabled()
    })

    test('go to amazon url buy a product', async ({page, homePage})=>{
        (await homePage.searchProudct('laptops')).selectProduct('laptops')
        await expect(page.locator('.puis-card-container')).toHaveCount(22)
        await page.locator('.puisg-row').getByText('128GB', {exact: false}).first().click()
    })

    test('google search test', async({page})=>{
        await page.goto('https://www.google.com/')
        await page.locator('[title="Search"]').fill('icici')
        const locators = await page.$$('[role="listbox"] li');
        const texts = await Promise.all(locators.map(async (e) => await e.innerText()))
        console.log(texts)
        await page.pause()
    })
  })