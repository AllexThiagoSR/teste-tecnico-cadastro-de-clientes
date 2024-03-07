const { Router } = require("express");
const { clientController } = require("../controllers");
const { createClientMiddleware } = require("../middlewares");

const router = Router();

router.get('/', clientController.getAll);

router.post('/', createClientMiddleware, clientController.create);

router.get('/route', clientController.route);

module.exports = router;

