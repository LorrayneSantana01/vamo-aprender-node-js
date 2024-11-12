const chalk = require('chalk')

const nota = 7

if(nota >= 7) {
    return console.log(chalk.green.bold('Parabéns! Você foi aprovado :)'))
} else {
    console.log(chalk.bgRed.black('Que pena! Você foi reprovado :('))
}
