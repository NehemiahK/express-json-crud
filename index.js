const express = require('express')
const { add } = require('./models/Todo')
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add-item', async (req,res) => {
    const item = await add(req.body.item)
    res.send(item)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})