const databaseConnection = require("../config/database");

const getAll = async () => {
  const clients = await databaseConnection.query("SELECT * FROM clients");
  return clients.rows;
}

module.exports = { getAll };