const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
       age: { type: Number, default: 0 },
       sex: { type: Number, default: 0 }
})

var User = mongoose.model('user', userSchema)

module.exports = User
 