const { clientModel } = require("../models");

const getAll = async () => {
  const clients = await clientModel.getAll();
  return { status: 200, data: clients };
}

module.exports = { getAll };