import express from 'express'

const app = express()

app.use((req, res, next) => {
  console.log(req.url)
  next()
})

app.use(express.static('public'))

app.locals.students = [{
  id: 1,
  name: 'jim'
}, {
  id: 1,
  name: 'jane'
}]

app.get('/students', (req, res) => {
  res.status(200).json(app.locals.students)
})

app.listen(8080)