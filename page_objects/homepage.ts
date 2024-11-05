import { Page } from "@playwright/test";
import { SearchPage } from "./searchPage";

export class HomePage {
    page: Page;
    searchTexbox: string = 'Search Amazon'

    constructor(page: Page){
        this.page = page
    }
    
    async searchProudct(productName: string) {
        await this.page.getByPlaceholder(this.searchTexbox).fill(productName)
        return this
    }
        

    async selectProduct(productName: string) {
        await this.page.locator(`[aria-label="${productName}"]`).click()
        return new SearchPage(this.page)
    }
        

    // searchProudctPens = async (page: Page) => 
    //     await page.getByPlaceholder('Search Amazon').fill('pens')
}