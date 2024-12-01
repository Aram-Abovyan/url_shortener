const validationErrorHandler = (errors, req, res, next) => {
  if (!Array.isArray(errors)) {
    return next(errors)
  }

  console.error(errors)

  const statusCode = 400

  res.status(statusCode).json({
    error: {
      message: 'Validation Error'
    }
  })
}

const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  const statusCode = err.status || 500
  res.status(statusCode).json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  })
}

module.exports = {
  errorHandler,
  validationErrorHandler
}