const fs = require('fs')
// 同步
try{
  let dirName = fs.readdirSync('./')
  console.log(dirName)
}
catch(err){
  console.log(err)
}

// 异步 
// fs.readdir('./', (err, files) => {
//   if(err) {
//     console.log(err)
//   } else {
//     console.log(files)
//   }
// })
