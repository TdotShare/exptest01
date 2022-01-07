const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({message : "Hello World"})
})

app.get('/:id', (req, res) => {
    res.json({message : req.params.id})
  })

  
app.listen(port , '0.0.0.0')