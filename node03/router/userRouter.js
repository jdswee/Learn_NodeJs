const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')

router.post('/register', (req, res) => {
  let { username, password } = req.body
  if ( username && password ) {
    User.insertMany({username: username, password: password}).then(() => {
      res.send({status: 1, msg: '注册成功'})
    }).catch((err) => {
      res.send({status: 2, msg: '注册失败' + err})
    })     
  } else {
    console.log(username, password)
    res.send({status: 0, msg: '参数错误'})
  }
})

router.post('/login', (req, res) => {
  let {username, password} = req.body
  
  if (!username || !password) return res.send({status: 0, msg: '参数错误'})

  User.find({username: username, password: password}).then((data) => {
    if (data.length > 0) {
      res.send({status: 1, msg: '登录成功'})
    } else {
      res.send({status: 2, msg: '用户名或密码错误'})
    }
  }).catch((err) => {
    res.send({status: 3, msg: err})
  })
})

module.exports = router
