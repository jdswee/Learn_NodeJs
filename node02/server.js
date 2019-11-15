const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/user/login', (req, res) => {
  let { username, password } = req.query 
  if (username === 'bob' && password === '456') {
    res.send({ statusCode: 1, msg: 'success' })
  } else {
    res.send({ statusCode: 0, msg: 'fail' })
  }
})

app.post('/user/register', (req, res) => { 
  let {us, ps} = req.body
  
  console.log(req.body)

  if (us == 123 & ps == 123) {
    res.send({statusCode: 1, msg: 'success'})
  } else {
    res.send({statusCode: 0, msg: 'fail'})
  }
})

app.listen('3000', () => {
  console.log('server start')
})
