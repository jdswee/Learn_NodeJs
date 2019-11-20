// 入口文件 
const express = require('express')
// 日期时间格式化
const moment = require('moment')
const app = express()
// post 请求
const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({ extended: false}))
app.use(bodyparser.json())

const db = require('./db/connect')
// Router
const userRouter = require('./router/userRouter')
app.use('/user', userRouter)

app.listen(3000, () => {
  console.log(moment().format('YY/MM/DD HH:mm:ss') + ' Server start.')
})
