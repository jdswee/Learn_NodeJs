const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/1902', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connect error:'))
db.once('open', () => {
  console.log('We are connected!')
})
