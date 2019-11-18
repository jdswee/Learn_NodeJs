const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/local', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
// db 是数据库的连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  // we're connected!
  console.log('we\'re connected')
})

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
       age: { type: Number },
       sex: { type: Number, default: 0 }
})
var User = mongoose.model('user', userSchema)
// 插入
// User.insertMany({ username: 'bob', password: '123', age: 20}).then((msg) => {
//   console.log(msg)
//   console.log('插入成功')
// }).catch((err) => {
//   console.log('插入失败')
// })

// 查询
// User.find({ age: 17 }).then((msg) => {
//   console.log(msg)
//   console.log('查询成功')
// }).catch((err) => {
//   console.log('查询失败')
// })

// 删除
User.remove().then((msg) => {
  console.log(msg)
  console.log('删除成功')
}).catch((err) => {
  console.log(err)
  console.log('删除失败')
})
