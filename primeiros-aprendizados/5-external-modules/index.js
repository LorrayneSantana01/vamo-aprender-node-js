const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']

const idade = args['idade']

console.log(nome, idade)

console.log('O nome dela é ' + nome + ' e ela tem ' + idade + ' anos!')

console.log(`O nome dela é ${nome} e ela tem ${idade} anos!`)