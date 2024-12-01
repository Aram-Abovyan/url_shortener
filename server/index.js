require('dotenv').config({path: './.env'})
const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./routes')
const { validationErrorHandler, errorHandler } = require('./middlewares/errors')

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.use(validationErrorHandler)
app.use(errorHandler)

const port = process.env.API_PORT || 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Url Shortener server listening on port ${port}`)
})
