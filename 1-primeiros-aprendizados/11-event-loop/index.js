// primeira forma
function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
}

b()
c()
a()


// segunda forma
function a() {
    console.log('Executando a()')
}

function b() {
    console.log('Executando b()')
}

function c() {
    console.log('Executando c()')
    a()
    b()
}

c()