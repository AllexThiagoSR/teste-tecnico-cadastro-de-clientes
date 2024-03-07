const { clientModel } = require("../models");

const getAll = async () => {
  const clients = await clientModel.getAll();
  return { status: 200, data: clients };
};

const create = async (values) => {
  const client = await clientModel.create(values);
  return { status: 201, data: client };
};

module.exports = { getAll, create };