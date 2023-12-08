import express from 'express'

const app = express()

app.locals.books = [{
  id: 1,
  title: 'd-title',
  content: 'd-content'
}, {
  id: 2,
  title: 'b-title',
  content: 'b-content'
}, {
  id: 3,
  title: 'c-title',
  content: 'c-content'
}]

app.use((req, res, next) => {
  console.log(`Request was ${req.method} -> ${req.url}`)
  next()
})

const validateId = (req, res, next) => {
  console.log(req.params)
  if (req.params.id && !isNaN(parseInt(req.params.id))) {
    next()
  } else {
    res.status(400).json({ message: 'ids should be numbers' })
  }
}
// app.use(validateId)

app.use(express.json())


app.get('/books', (req, res, next) => {
  const sortField = req.query.sortField
  if (sortField) {
    let sortOrder = 1
    if (req.query.sortOrder) {
      sortOrder = parseInt(req.query.sortOrder)
    }

    const comparator = (a, b) => {
      if (a[sortField] > b[sortField]) {
        return 1 * sortOrder
      } else {
        if (a[sortField] < b[sortField]) {
          return -1 * sortOrder
        }
      }
      return 0
    }

    res.status(200).json(app.locals.books.sort(comparator))
  } else {
    res.status(200).json(app.locals.books)
  }
})

app.post('/books', (req, res, next) => {
  try {
    if (req.body.title && req.body.title.length > 3) {
      app.locals.books.push(req.body)
      res.status(201).json({ message: 'created' })
    } else {
      throw new Error('invalid request body')
    }    
  } catch (error) {
    next(error)
  }
})

app.get('/books/:id', [validateId] ,(req, res, next) => {
  const id = parseInt(req.params.id)
  const book = app.locals.books.find(e => e.id === id)
  if (book) {
    res.status(200).json(book)
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

app.put('/books/:id', [validateId], (req, res, next) => {
  const id = parseInt(req.params.id)
  const bookUpdate = req.body
  const bookIndex = app.locals.books.findIndex(e => e.id === id)
  if (bookIndex !== -1) {
    app.locals.books[bookIndex].title = bookUpdate.title
    app.locals.books[bookIndex].content = bookUpdate.content
    res.status(202).json({ message: 'accepted' })
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

app.delete('/books/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  const bookIndex = app.locals.books.findIndex(e => e.id === id)
  if (bookIndex !== -1) {
    app.locals.books.splice(bookIndex, 1)
    res.status(202).json({ message: 'accepted' })
  } else {
    res.status(404).json({ message: 'not found' })
  }
})

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({ message: err.message })
})

app.listen(8080)