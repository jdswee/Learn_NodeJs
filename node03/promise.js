const fs = require('fs')

function checkExit() {
  return new Promise((resolve, reject) => {
    fs.stat('./test.js', (err) => {
      if (err) {
        reject('文件不存在')
      } else {
        resolve('文件存在')
      }
    })
  })
}

function delFile() {
  return new Promise((resolve, reject) => {
    fs.unlink('./test.js', (err) => {
      if (err) {
        reject('删除失败')
      } else {
        resolve('删除成功')
      }
    })
  })
}

checkExit().then((msg) => {
  console.log(msg)
  return delFile()
}).then((msg) => {
  console.log(msg)
}).catch((err) => {
  console.log('catch ' + err)
})
