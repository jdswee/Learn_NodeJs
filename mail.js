"use strict";
const nodemailer = require("nodemailer")
// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
  host: "smtp.qq.com",
  port: 465,
  secure: true,
  auth: {
    user: '1784041950@qq.com',
    pass: 'yezpbwpymylfihae'
  }
})
// 邮件信息
let mailobj = {
  from: '"Fred Foo" <1784041950@qq.com>',
  to: "m15249216278@163.com",
  subject: "1902",
  text: "您的验证码是123，有效期是5分钟。",
  // html: "<b>Hello world ?</b>"
}
// 发送邮件
transporter.sendMail(mailobj, (err, data) => {
  console.log(err)
  console.log(data)
});
