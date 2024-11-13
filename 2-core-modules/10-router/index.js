const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true)
  const fileName = q.path.substring(1)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

  if (fileName.includes('html')) {
    if(fs.existsSync(fileName)) {
      fs.readFile(fileName, function (err, data) {
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, {'content-type' : 'text/html'})
        res.write(data)
        return res.end()
      })
    }
  }
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})