const express = require('express')
const app = express()

app.get('/test3', (res, req, next) => {
  console.log('func1')
  next()
}, (res, req) => {
  console.log('func2')
})

app.listen('3000', () => {
  console.log('server start')
})