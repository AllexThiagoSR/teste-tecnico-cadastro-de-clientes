const { clientService } = require("../services");

const getAll = async (req, res) => {
  const { q, email, phone } = req.query;
  const { status, data } = await clientService.getAll({ q, email, phone });
  return res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data } = await clientService.create(req.body);
  return res.status(status).json(data);
};

const route = async (_req, res) => {
  const { status, data } = await clientService.route();
  return res.status(status).json(data);
};

module.exports = { getAll, create, route };
