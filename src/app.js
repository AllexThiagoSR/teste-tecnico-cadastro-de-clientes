const express = require("express");
require("express-async-errors");
const cors = require("cors");
const helmet = require("helmet");

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

app.get('/', (_req, res) => res.status(200).json({ message: 'API is running' }));

module.exports = app;
