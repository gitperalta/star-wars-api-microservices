const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index.js");
const middlewares = require("../middlewares/index.js");

router.get("/", controllers.getCharacters);
router.post("/", middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
