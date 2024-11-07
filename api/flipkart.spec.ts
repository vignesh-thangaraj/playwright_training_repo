import { expect, test } from '@playwright/test';
// import { test } from '../testFixtures';

interface randomUserReponse {
    "results" : userResponse[]
}

interface userResponse {
        "gender": string,
        "name": {
            "title": string,
            "first": string,
            "last": string
        }
}


test.describe('Flipkart APi test', () =>{
    test('landing on user profile page', async ({ request })=>{
        const randomuser = await request.get('https://randomuser.me/api/')
        const response: randomUserReponse = await randomuser.json()
        expect(randomuser.status()).toBe(200)
        // expect(response['results'][0]['a']).toBe('male')
        // expect(response.results[0].gender).toBe('male')
        const lambdatestRequest = await request.post(`https://auth.lambdatest.com/api/login`, {
            headers:{
                "content-type": "application/json"
            },
            data: {
                "email": "email@email.com",
                "password": "emailemail"
            }
          });
          expect(lambdatestRequest.status()).toBe(422)
    })
})
