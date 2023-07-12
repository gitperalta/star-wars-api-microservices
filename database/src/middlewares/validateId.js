const ErrorHandler = require("../errors");
const { Character } = require("../db");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const ids = await Character.find().then((characters) =>
    characters.map((character) => character.id)
  );
  if (ids.includes(id)) {
    return next();
  } else {
    const { statusCode, message } = new ErrorHandler("Invalid Id");
    res.status(statusCode).send({ error: message });
  }
};
