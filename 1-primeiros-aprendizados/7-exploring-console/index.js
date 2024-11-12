// mais de um valor
const a = 10
const b = 'oi Node'
const c = 10.5
console.log(a,b,c)


// contagem de impressoes
console.count('O valor de a é ' + a + ', contagem')
console.count('O valor de a é ' + a + ', contagem')
console.count('O valor de a é ' + a + ', contagem')


// interpolacao
console.count('O valor de a é ' + a + ', contagem')
console.count(`O valor de a é ${a}, contagem`)


// limpar console
setTimeout(() => {
    console.clear()
}, 2000
)