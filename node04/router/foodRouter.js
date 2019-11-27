const express = require('express')
const router = express.Router()
const foodModule = require('../db/model/foodModel')

router.post('/add', (req, res) => {
  // let item = {
  //   name: '西红柿拌白糖',
  //   price: '9.9',
  //   description: '好吃',
  //   foodtype: '凉菜',
  //   typeid: 1,
  //   image: '/public/images/tomato.jpg'
  // }
  let {name, price, description, foodtype, typeid, image} = req.body

  foodModule.insertMany({name, price, description, foodtype, typeid, image}).then(() => {
    res.send({status: 1, msg: '添加成功'})
  }).catch((err) => {
    res.send({status: 0, msg: '添加失败' + err})
  })
})
// 类别查询
router.post('/getInfoByType', (req, res) => {
  let {typeid} = req.body
  foodModule.find({typeid: typeid}).then((data) => {
    console.log(typeid)
    if(data.length > 0) {
      res.send({status: 1, msg: 'success', list: data})
    }else {
      res.send({status: 2, msg: '没有找到符合条件的结果'})
    }
  }).catch((error) => {
    res.send({status: 0, msg: 'fail' + error})
  })
})
// 关键字查询
router.post('/getInfoByKeywords', (req, res) => {
  let {keyword} = req.body
  let reg = new RegExp(keyword)
  foodModule.find({
    $or: [
      {name: {$regex: reg}},
      {description: {$regex: reg}}
    ]}).then((data) => {
    if (data.length > 0) {
      res.send({status: 1, msg: 'success', list: data})
    } else {
      res.send({status: 2, msg: '未找到匹配项'})
    }
  }).catch((err) => {
    res.send({status: 0, msg: 'fail ' + err})
  }) 
})
// 删除
router.post('/del', (req, res) => {
  let {id} = req.body

  foodModule.deleteOne({_id: id}).then((data) => {
    if(data.deletedCount == 0) {
      res.send({status: 2, msg: '未匹配任何 item'})
    } else {
      res.send({status: 1, msg: 'success'})
    }
  }).catch((err) => {
    res.send({status: 0, msg: 'fail ' + err})
  })
})
// 修改
router.post('/update', (req, res) => {
  let {name, price, description, foodtype, typeid, image, id} = req.body
  foodModule.updateOne({_id: id}, {name, price, description, foodtype, typeid, image}).then((data) => {
    res.send({status: 1, msg: 'success'})
  }).catch((err) => {
    res.send({status: 0, msg: 'fail'})
  })
})
// 分页查询
router.post('/getInfoByPage', (req, res) => {
  let pageSize = Number(req.body.pageSize) || 2
  let page = Number(req.body.page) || 1

  foodModule.find().limit(pageSize).skip((page-1)*pageSize).then((data) => {
    res.send({status: 1, msg: 'success', list: data})
  }).catch((err) => {
    res.send({status: 0, msg: 'fail', err})
  })
})

module.exports = router
