const { Router } = require("express");
const { clientController } = require("../controllers");

const router = Router();

router.get('/', clientController.getAll);

router.post('/', clientController.create);

module.exports = router;

