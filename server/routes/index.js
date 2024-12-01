const express = require('express')
const router = express.Router()
const urlRoutes = require('./urlRoutes')

router.use('/url', urlRoutes)

module.exports = router