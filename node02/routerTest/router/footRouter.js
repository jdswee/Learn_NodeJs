const express = require('express')
const router = express.Router()

router.get('/add', (req, res) => {
  res.send('add food')
})

router.get('/del', (req, res) => {
  res.send('del food')
})

module.exports = router
