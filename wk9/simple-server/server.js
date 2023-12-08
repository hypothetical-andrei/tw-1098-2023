import express from 'express'
import Sequelize from 'sequelize'

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'my.db'
})

const app = express()

app.use(express.json())

const Book = sequelize.define('book', {
  title: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      len: [3, 100]
    }
  },
  content: Sequelize.STRING,
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 0
    }
  }
})

await sequelize.sync({ alter: true })

// get /books?simplified=true
// get /books?title=s
// get /books?filterField=title&filterValue=s
app.get('/books', async (req, res, next) => {
  try {
    const query = {}
    if (req.query.simplified === 'true') {
      query.attributes = ['title', 'content']
    }
    if (req.query.title) {
      query.where = {
        title: {
          [Sequelize.Op.like]: `%${req.query.title}%`
        }
      }
    }
    if (req.query.filterField && req.query.filterValue) {
      query.where = {
        [req.query.filterField]: {
          [Sequelize.Op.like]: `%${req.query.filterValue}%`
        }
      }
    }
    const books = await Book.findAll(query)
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
})

app.post('/books', async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.status(201).json(book)
  } catch (error) {
    next(error)
  }
})

app.get('/books/:bid', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bid)
    if (book) {
      res.status(200).json(book)
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (error) {
    next(error)
  }
})

app.put('/books/:bid', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.bid)
    if (book) {
      await book.update(req.body)
      res.status(202).json({ message: 'accepted' })
    } else {
      res.status(404).json({ message: 'not found' })
    }
  } catch (error) {
    next(error)
  }
})

app.use((err, req, res, next) => {
  console.warn(err)
  res.status(500).json({ message: 'error has occured' })
})

app.listen(8080)