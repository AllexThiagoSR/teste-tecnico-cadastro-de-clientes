const APIError = require("./APIError");

module.exports = class InternalError extends APIError {
  constructor(message) {
    super(message, 500);
  }
}