const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const basePath = path.join(__dirname, 'pages')

const routers = require('./routers')

app.use(express.static('public'))

app.use('/routers', routers)

app.use(function(req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})