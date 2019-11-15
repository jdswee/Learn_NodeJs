/* 
  1. 请求网站数据；
  2. 将数据保存本地文件。
*/
const http = require('https')
const fs = require('fs')
const cheerio = require('cheerio')
const url = "https://www.baidu.com"
const json = "http://nodejs.org/dist/index.json"
const acfunUrl = "https://www.qunar.com"
http.get(acfunUrl, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type']
  // console.log(statusCode, contentType)

  let error;
  if(statusCode !== 200) {
    error = new Error('Request failed.\n' +
                      `Status Code: ${ statusCode }`);
  } else if (!/^text\/html/.test(contentType)) {
    error = new Error('Invalid content-type \n' +
                      `Expected application/json but received ${contentType}`);
  }
  if(error) {
    console.error(error.message)
    res.resume()
    return false
  }

  let rawData = ''
  res.on('data', (chunk) => {
    // console.log('--')
    rawData += chunk.toString('utf8')
  })
  res.on('end', () => {
    console.log('数据传输完毕')
    let $ = cheerio.load(rawData)
    $('img').each((index, el) => {
      fs.mk
    })
  })
}).on('error', (err) => {
  console.log('请求错误')
})
