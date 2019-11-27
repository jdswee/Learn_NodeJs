const express = require('express')
const path = require('path')
const app = express()
const db = require('./db/connect')
const bodyparser = require('body-parser')
const foodRouter = require('./router/foodRouter')
const fileRouter = require('./router/fileRouter')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
// 静态文件
app.use('/public', express.static(path.join(__dirname, './static')))
// food router
app.use('/foods', foodRouter)
// file router
app.use('/file', fileRouter)

app.listen(3000, () => {
  console.log('server start.')
})
