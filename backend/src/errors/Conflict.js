const APIError = require("./APIError");

module.exports = class Conflict extends APIError {
  constructor(message) {
    super(message, 409)
  }
}