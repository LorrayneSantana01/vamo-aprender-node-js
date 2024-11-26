var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../pages')

router.get('/', (req, res) => {
  res.sendFile(`${basePath}/home.html`)
})

router.get('/about', (req, res) => {
  res.sendFile(`${basePath}/about.html`)
})

module.exports = router