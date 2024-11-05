import { expect, Page } from "@playwright/test";

export class SearchPage{
    page: Page;

    constructor(page: Page){
        this.page = page
    }

    validateCount = async (count: number) => {
        await expect(this.page.locator('.puis-card-container')).toHaveCount(count)
        return this
    }

}