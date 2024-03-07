const { clientService } = require("../services");

const getAll = async (req, res) => {
  const { status, data } = await clientService.getAll();
  return res.status(status).json(data);
};

module.exports = { getAll };
