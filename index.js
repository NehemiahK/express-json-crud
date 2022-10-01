import express, { json } from 'express'
import { add, find } from './models/Todo/index.js'
const app = express()
const port = 5002

app.use(json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add-item', async (req,res) => {
    const item = await add(req.body.item)
    res.send(item)
})

app.get('/item', async (req,res) => {
    const items = await find();
    res.send(items)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})