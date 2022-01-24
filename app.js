const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/logging', (req, res) => {
    console.log(`logging`))
    res.send('thanks')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
