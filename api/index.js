const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

const users = {
  bob: {name: "bob", message: "hi"},
  amir: {name: "amir", message: "yo yo yo"},
}

app.get('/', (req, res) => {
  res.send()
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.get('/users/:name', (req, res) => {
  res.send(users[req.params.name])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
