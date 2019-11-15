const url = require('url')
let urlString = "https://47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao"
let urlObj = url.parse(urlString)
console.log(urlObj)
