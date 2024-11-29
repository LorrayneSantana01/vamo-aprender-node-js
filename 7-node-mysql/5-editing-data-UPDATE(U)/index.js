const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbooks', (req, res) => {
  
    const title = req.body.title
    const pageqty = req.body.pageqty

    const query = `INSERT INTO books (title, pageqty) VALUES ('${title}', ${pageqty})`

      conn.query(query, function(err) {
        if (err) {
          console.log(err)
        }

        res.redirect('/')
      })
})

app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books'

  conn.query(query, function(err, data) {
    if (err) {
      console.log(err)
      return
    }

    const books = data

    console.log(books)

    res.render('books', {books})
  })
})

app.get('/book/:id', (req, res) => {

  const id = req.params.id

  const query = `SELECT * FROM books WHERE id = ${id}`

  conn.query(query, function(err, data) {
    if (err) {
      console.log(err)
      return
    }
    
    const books = data[0]

    res.render('book', {books})
  })
})

app.get('/books/edit/:id', (req, res) => {

  const id = req.params.id

  const query = `SELECT * FROM books WHERE id = ${id}`

  conn.query(query, function(err, data) {
    if (err) {
      console.log(err)
      return
    }
    
    const books = data[0]

    res.render('editbook', {books})
  })

})

app.post('/books/updatebook', function (req, res) {
  
  const id = req.body.id
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `UPDATE books SET title = '${title}', pageqty = ${pageqty} WHERE id = ${id}`

  conn.query(query, function(err) {
    if (err) {
      console.log(err)
    }

    res.redirect(`/books/edit/${id}`)
  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
  port: '3305'
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectou!')

  app.listen(3000)
})