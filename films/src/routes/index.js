const { Router } = require("express");
const router = Router();
const controllers = require("../controllers/index.js");
const middlewares = require("../middlewares/index.js");

router.get("/", controllers.getFilms);
router.post("/", middlewares.filmValidation, controllers.postFilm);

module.exports = router;
