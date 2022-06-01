const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World from AZ1?')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
