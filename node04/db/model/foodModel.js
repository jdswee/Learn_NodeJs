const mongoose = require('mongoose')

let foodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  price: {type: String, required: true},
  description: {type: String, required: true},
  foodtype: {type: String, required: true},
  typeid: {type: Number, required: true},
  image: {type: String, required: true}
})

let Foods = mongoose.model('foods', foodSchema)

module.exports = Foods
