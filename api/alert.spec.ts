import { expect, test } from '@playwright/test';

test.describe('alert operation', () => {
    test ('go to alert page',async({page}) => {
      await page.goto('https://demo.automationtesting.in/Frames.html')
    
      await page.getByText('SwitchTo').first().hover()
      
      // alert 1
      await page.getByText('Alerts').click()
      page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        if(dialog.message() === 'I am an alert box!')
          await dialog.accept()
        else
          await dialog.dismiss()
      })

      
      await page.getByRole('button', {name: 'click the button to display an  alert box:'}).click()
    
      // page.off('dialog', () => console.log('i turn off the dialog event'))
      // alert 2
      page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`); 
        await dialog.accept()
      })
    
      
      await page.getByText('Alert with OK & Cancel').click()
      await page.getByRole('button', {name: 'click the button to display a confirm box'}).click()
      // page.off('dialog', () => console.log('i turn off the dialog event'))
      await page.pause()
      
    })
    })