const { Router } = require("express");
const controllers = require("../controllers/index.js");
const middlewares = require("../middlewares/index.js");
const router = Router();

router.get("/", controllers.getPlanets);
router.post("/", middlewares.planetValidation, controllers.createPlanet);

module.exports = router;
