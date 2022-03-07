class ApiError {
  constructor(code, message) {
    this.code = code,
      this.message = message
  }

  static BadRequestException(msg, params) {
    return new ApiError(400, { message: msg, params: params })
  }

  static UnauthorizedException(msg, params) {
    return new ApiError(401, { message: msg, params: params })
  }

  static NotFoundException(msg, params) {
    return new ApiError(404, { status: 'error', message: msg, params: params })
  }
  static ConflictException(msg, params) {
    return new ApiError(409, { status: 'error', message: msg, params: params })
  }

}

module.exports = ApiError