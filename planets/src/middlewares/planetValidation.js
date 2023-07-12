const { ClientError } = require("../utils/errors/index.js");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  throw new ClientError("Error en el nombre", 401);
};
