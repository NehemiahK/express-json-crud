import express, { json } from 'express'

import todoRoutes from './services/TodoHandler.js'

const app = express()
const port = 5002

app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/todo', todoRoutes)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})