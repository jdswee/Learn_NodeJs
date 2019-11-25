const express = require('express')
const path = require('path')
const app = express()
const db = require('./db/connect')
const bodyparser = require('body-parser')
const foodRouter = require('./router/foodRouter')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
// 静态文件
app.use('/public', express.static(path.join(__dirname, './hehe')))
// food router
app.use('/foods', foodRouter)

app.listen(3000, () => {
  console.log('server start.')
})
