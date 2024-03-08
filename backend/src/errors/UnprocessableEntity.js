const APIError = require("./APIError");

module.exports = class UnprocessableEntity extends APIError {
  constructor(message) {
    super(message, 422);
  }
}