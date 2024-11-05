import { test, expect } from '@playwright/test';
import { HomePage } from '../page_objects/homepage';


let laptopName = 'HP Newest Business'

test.describe('add an item in the shopping cart', () =>{
    test('search a product in amazon', async ({page})=>{
        await page.goto('https://www.amazon.com/')
        const laptops = 'laptops'
        const homePage = new HomePage(page)
        await (await (await homePage.searchProudct(laptops)).selectProduct(laptops)).validateCount(21)
        // const pens = 'pens'
        // new HomePage(page).searchProudct(pens).selectProduct(pens).validateCount(10)
        await page.locator('.puisg-row').getByText('128GB', {exact: false}).first().click()
        await expect(page.locator('#productTitle')).toBeEnabled()
    })

    test('go to amazon url buy a product', async ({page})=>{
        await page.goto('https://www.amazon.com/');
        (await new HomePage(page).searchProudct('laptops')).selectProduct('laptops')
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