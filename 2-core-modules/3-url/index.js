const url = require('url')
const address = 'https://github.com/LorrayneSantana01/vamo-aprender-node-js'
const parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)