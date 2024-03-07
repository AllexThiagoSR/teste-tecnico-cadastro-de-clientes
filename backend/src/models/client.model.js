const databaseConnection = require("../config/database");

const getAll = async ({ q = '', email = '', phone = '' }) => {
  const { rows: clients } = await databaseConnection.query(
    `SELECT * FROM clients
    WHERE name LIKE $1 AND email LIKE $2 AND phone LIKE $3`,
    [`%${q}%`, `%${email}%`, `%${phone}%`],
  );
  return clients;
};

const create = async ({ name, email, phone, x, y }) => {
  const { rows: [client] } = await databaseConnection.query(
    `INSERT INTO clients (name, email, phone, x, y)
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5
    ) RETURNING *`,
    [name, email, phone, x, y],
  );
  return client;
};

module.exports = { getAll, create };