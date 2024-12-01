const { validationResult } = require('express-validator');
const urlService = require('../services/urlService')

const shortenUrl = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return next(errors.array())
  }

  try {
    const shortUrl = await urlService.getShortUrl(req.body.url)
    res.send({shortUrl})
  } catch (e) {
    next(e)
  }
}

const redirect = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return next(errors.array())
  }

  const hash = req.params.hash

  try {
    const urlMap = await urlService.getUrl(hash)

    if (!urlMap) {
      return res.status(404).json({error: 'URL not found'})
    }

    return res.redirect(301, urlMap.url)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  shortenUrl,
  redirect
}