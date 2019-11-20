// 邮箱验证码
'use strict';
const nodemail = require('nodemailer')

let transport = nodemail.createTransport({
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '1784041950@qq.com',
    pass: 'yezpbwpymylfihae'
  }
})

function sendMailCode(mail, code) {
  let mailobj = {
    from: '"LiQiang" <1784041950@qq.com>',
    to: mail,
    subject: '1902', 
    text: `你的验证码是${code}，有效期是五分钟。`
  }

  return new Promise((resolve, reject) => {
    transport.sendMail(mailobj, (err, data) => {
      if (err) {
        reject()
      }else {
        resolve()
      }
    })    
  })
}

module.exports = {sendMailCode: sendMailCode}
