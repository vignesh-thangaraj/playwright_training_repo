import { test as base } from '@playwright/test';
import { HomePage } from './page_objects/homepage';
import { SearchPage } from './page_objects/searchPage';

export const test = base.extend<{ homePage: HomePage, searchPage: SearchPage }>({
    homePage: async ({ page}, use) => {
        const homePage = new HomePage(page);
        await use(homePage);
    },
    searchPage: async ({ page}, use) => {
        const searchPage = new SearchPage(page);
        await use(searchPage);
    },
    page: async ({ baseURL, page }, use) => {
        await page.goto(baseURL || '');
        await use(page);
      },
  });