const ApiError = require("./ApiError");

function ExceptionHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message)
  }
}

module.exports = ExceptionHandler