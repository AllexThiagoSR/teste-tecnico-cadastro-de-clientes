const { Router } = require("express");
const clientRouter = require("./client.routes");

const indexRouter = Router();

indexRouter.use('/clients', clientRouter);

module.exports = indexRouter;