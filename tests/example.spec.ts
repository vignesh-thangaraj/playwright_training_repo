// test.describe --> wrap scenario's of test
// test.beforeEach
// test.afterEach
// test
// test.beforeAll
// test.afterAll

import { test, expect } from '@playwright/test';

test.beforeAll('Before All block', ()=>{})
test.afterAll('After All block', ()=>{})

// test level usage
test.describe('add an item in the shopping cart', () =>{
  test('go to amazon url', ()=>{})
  test('seach a product', ()=>{})
  test('click on add to cart', ()=>{})
  test.afterEach('After Each block', ()=>{})
})

// collection of sceanario's with individual test
// test.describe('as a amazon user', () =>{
//   test('should order the product', ()=>{

//   })
//   test('should track my product', ()=>{

//   })
//   test('should check my refund', ()=>{

//   })
// })
