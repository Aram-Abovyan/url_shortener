const express = require('express')
const router = express.Router()
const urlController = require('../controllers/urlController')
const { validateUrlField, validateMd5Hash } = require('../middlewares/validators')

router.use('/shorten', validateUrlField, urlController.shortenUrl)
router.get('/:hash', validateMd5Hash, urlController.redirect)

module.exports = router