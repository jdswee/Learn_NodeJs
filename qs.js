const qs = require('querystring')
// const string = "name=bob&pass=123&sex=1"
// let obj = qs.parse(string)

// console.log(obj)
const obj = {"name": "bob", "age": 123, "sex": 0}
let string = qs.stringify(obj)
console.log(string)
