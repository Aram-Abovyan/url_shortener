const { checkSchema } = require('express-validator')

const validateUrlField = checkSchema({
  url: {
    in: ['body'],
    isURL: {
      options: {
        protocols: ['http', 'https'],
        require_protocol: true
      },
      errorMessage: 'Invalid URL format'
    },
    notEmpty: {
      errorMessage: 'URL field cannot be empty'
    }
  }
})

const validateMd5Hash = checkSchema({
  hash: {
    in: ['params'],
    matches: {
      options: [/^[a-f0-9]{32}$/i],
      errorMessage: 'Invalid MD5 hash'
    },
    errorMessage: 'hash is required',
  }
})

module.exports = {
  validateUrlField,
  validateMd5Hash
}