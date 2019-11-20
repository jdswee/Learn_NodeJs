const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const mailVerification = require('../utils/mail')
// 邮箱验证码
let verificationCode = {}
// 注册
router.post('/register', (req, res) => {
  let { username, password, code } = req.body
  if ( username && password&& code ) {
    if (verificationCode[username] != code) {
      return res.send({status: 4, msg: '验证码错误'})
    }
    User.find({username: username}).then((data) => {
      if (data.length == 0) {
        return User.insertMany({username: username, password: password})
      } else {
        res.send({status: 3, msg: '用户名已存在'})
      }
    }).then(() => {
      res.send({status: 1, msg: '注册成功'})
    }).catch((err) => {
      res.send({status: 2, msg: '注册失败' + err})
    })     
  } else {
    console.log(username, password, code)
    res.send({status: 0, msg: '请填写完整信息'})
  }
})
// 登录
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
// 邮箱验证码
router.post('/getMailCode', (req, res) => {
  let { mail } = req.body
  let code = parseInt(Math.random()*10000)  
  
  mailVerification.sendMailCode(mail, code).then(() => {
    verificationCode[mail] = code
    res.send({status: 1, msg: '验证码发送成功！'})
  }).catch((err) => {
    res.send({status: 0, msg: '验证码发送失败！'})
    console.log('验证码发送失败：' + err)
  }) 
})

module.exports = router
