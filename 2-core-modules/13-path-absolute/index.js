const path = require('path')

//path absoluto
console.log(path.resolve('teste.txt'))

//join path
const midFolder = 'relatorios'
const fileName = 'lorrayne.txt'

const finalPath = path.join('/', 'aquivos', midFolder, fileName)

console.log(finalPath)