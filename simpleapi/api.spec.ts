import { test, expect } from '@playwright/test';

test('get placeholders data', async ({request})=>{
    const getPosts = await request.get('https://jsonplaceholder.typicode.com/posts/')
    const posts = await getPosts.json()
    expect(posts.length).toBe(100)

    const postPosts = await request.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
                "userId": 1,
                "id": 101,
                "title": "my own title",
                "body": "my own custom body text"
        }
    })
    const newPost = await postPosts.json()


    const putPosts = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
                "userId": 1,
                "id": 101,
                "title": "my own title",
                "body": "my own custom body text"
        }
    })
    const putPost = await putPosts.json()

    const patchPosts = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
        data: {
                "userId": 1,
                "id": 101,
                "title": "my own title",
                "body": "my own custom body text"
        }
    })
    const patchPost = await patchPosts.json()


})