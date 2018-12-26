
const express = require('express')
const app = express()
const port = 3000


app.get('/', function (req, res) {
  res.send('Hello friendo!')
})

app.use(express.static('public'))

app.listen(port, function(){
  console.log(`Example app listening @ http://localhost:${port}`)
})
