const { BadRequest } = require("../errors");
const { createClientSchema } = require("./schema.joi");

module.exports = (req, res, next) => {
  const { error } = createClientSchema.validate(req.body);
  if (error) throw new BadRequest(error.message);
  next();
};