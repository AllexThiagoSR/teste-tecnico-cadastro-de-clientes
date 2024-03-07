const { clientService } = require("../services");

const getAll = async (_req, res) => {
  const { status, data } = await clientService.getAll();
  return res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data } = await clientService.create(req.body);
  return res.status(status).json(data);
};

module.exports = { getAll, create };
