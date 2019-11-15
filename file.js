const fs = require('fs')
// 创建文件，覆盖写入
// fs.writeFile('name.txt', '今天', (err)=>{
//   if(err) {
//     console.log(err)
//   }
// })
// 写入文件
// fs.appendFile('name.txt', 'monday', (err) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log('success')
//   }
// })
// 读取文件
// fs.readFile('name.txt','utf8' ,(err, msg) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(msg)
//   }
// })
fs.unlink('name.txt', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log('success')
  }
})
