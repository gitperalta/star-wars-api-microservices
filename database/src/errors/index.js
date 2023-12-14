class ErrorHandler extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ErrorHandler";
  }
}

module.exports = ErrorHandler;
