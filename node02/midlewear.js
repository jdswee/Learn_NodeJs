const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
  console.log('midlewear')

  let {token} = req.query
  if(token) {
    next()
  } else {
    res.send('缺少 token')
  }
})

app.get('/test1', (req, res) => {
  res.send('test1 ok')
})

app.get('/test2', (req, res) => {
  res.send('test2 ok')
})

app.listen('3000', () => {
  console.log('server start')
})
