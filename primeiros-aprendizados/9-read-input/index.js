const { read } = require('fs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual sua linguagem favorita? ', (language) => {
    if(language === "HTML") {
        console.log('Isso nem é linguagem')
    } else {
        console.log('A sua lingaguem favorita é ' + language)
    }
    readline.close()
})