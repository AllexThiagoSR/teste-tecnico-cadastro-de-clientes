module.exports = class APIError extends Error {
  stack = '';
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}