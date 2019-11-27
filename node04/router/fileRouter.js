const express = require('express')
const router = express.Router()
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './static/img')
  },
  filename: function(req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now())
    // 加上时间戳和后缀名
    let fileFormat = (file.originalname).split('.')
    cb(null, file.fieldname + Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})

var upload = multer({storage: storage})
// single 里的是上传时的 key 值，必须前后端统一。
router.post('/upload', upload.single('test'), (req, res) => {
  let {size, mimetype, path} = req.file
  let types = ['jpg', 'jpeg', 'png', 'gif']
  let tmptype = mimetype.split('/')[1]

  if (size > 500000) {
    return res.send({status: 0, msg: '文件尺寸过大'})
  } else if (types.indexOf(tmptype) == -1) {
    return res.send({status: 0, msg: '文件类型错误'})
  } else {
    let imgUrl = `/public/img/${req.file.filename}`
    res.send({status: 1, msg: 'success', imgUrl: imgUrl})
  }
})

module.exports = router