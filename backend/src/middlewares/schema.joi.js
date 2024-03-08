const Joi = require("joi");

const createClientSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(9).required(),
  x: Joi.number().required(),
  y: Joi.number().required(),
});

module.exports = { createClientSchema }