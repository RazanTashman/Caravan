const express = require('express')
const router =require('./modules/router')
const cors =require ("cors")
const app = express()
app.use(cors())
app.use(`/`,router)

const port = process.env.PORT ||  8000

app.listen(port, () => console.log(`Runing on ${port} : http://localhost:${port}`))