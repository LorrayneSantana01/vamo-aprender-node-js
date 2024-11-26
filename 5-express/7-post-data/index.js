const express = require('express')
const path = require('path')

const app = express()

const port = 3000

const basePath = path.join(__dirname, 'templates')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userforms.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O usuário de nome ${name}, tem ${age} anos.`)

    res.sendFile(`${basePath}/userforms.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuário ${id}`)

    res.sendFile(`${basePath}/users.html`)

})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/templates.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})