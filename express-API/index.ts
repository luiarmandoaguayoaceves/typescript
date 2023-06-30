import express  from "express"

// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(401).json({
    ok: true,
    msg: 'Error de validacion'
  })
  res.json({
        ok: true,
        msg: 'Formato JSON este es un END POINT es una api para consumir de manera local'
    })
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`)
})

