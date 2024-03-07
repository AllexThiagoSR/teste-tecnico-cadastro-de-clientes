const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");
const connection = require("./config/database");

const app = express();

const access = (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
}

app.use(express.json());
app.use(access);
app.use(helmet());
app.use(cors());

app.get('/', async (_req, res) => {
  const result = await connection.query('SELECT NOW()');
  return res.status(200).json({ message: 'API is running', result })
});

module.exports = app;
