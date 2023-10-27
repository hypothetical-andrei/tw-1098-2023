import fetch from 'node-fetch'

// https://jsonplaceholder.typicode.com/posts

const response = await fetch('https://jsonplaceholder.typicode.com/posts')

const data = await response.json()

console.log(data)