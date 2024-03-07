const { Router } = require("express");
const { clientController } = require("../controllers");

const router = Router();

router.get('/', clientController.getAll);

module.exports = router;

