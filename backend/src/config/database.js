const { Pool } = require("pg");

const connection = new Pool();

module.exports = connection;