const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/1902', { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
// db 是数据库的连接对象
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  // we're connected!
  console.log('We\'re connected.\n')
})
