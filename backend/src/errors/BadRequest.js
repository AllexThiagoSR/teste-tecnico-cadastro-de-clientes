const APIError = require("./APIError");

module.exports = class BadRequest extends APIError {
  constructor(message) {
    super(message, 400);
  }
}