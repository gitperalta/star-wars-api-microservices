const { ClientError } = require("../utils/errors/index.js");

module.exports = (req, res, next) => {
  const { title } = req.body;
  if (title) return next();
  throw new ClientError("Error en el titulo", 401);
};
