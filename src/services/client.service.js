const { InternalError, Conflict } = require("../errors");
const { clientModel } = require("../models");
const convertCordinates = require("../utils/convertCordinatesTypes");
const nearestNeighbor = require("../utils/nearestNeighbor");

const getAll = async () => {
  const clients = await clientModel.getAll();
  return { status: 200, data: convertCordinates.multipleClients(clients) };
};


const create = async (values) => {
  try {
    const client = await clientModel.create(values);
    return { status: 201, data: convertCordinates.oneClient(client) };
  } catch (error) {
    if (error.message.includes('violates unique constraint "clients_email_key"')) {
      throw new Conflict('Email already registered.')
    }
    if (error.message.includes('violates unique constraint "clients_phone_key"')) {
      throw new Conflict('Phone already registered.')
    }
    throw new InternalError(error.message);
  }
};

const route = async () => {
  const clientsWithCompany = [{ id: 0, name: 'Empresa', x: 0, y: 0 }, ...await clientModel.getAll()];
  const initalRoute = nearestNeighbor(clientsWithCompany);
  return {
    status: 200,
    data: initalRoute,
  };
}

module.exports = { getAll, create, route };