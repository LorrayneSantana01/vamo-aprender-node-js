const fs = require('fs')

fs.unlink('arquivo.txt', function (err) {
  if (err) {
    console.log(err)
  } else {
    return
  }
  console.log('Arquivo removido!')
})