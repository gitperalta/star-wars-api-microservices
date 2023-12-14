const ErrorHandler = require("../errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["Character", "Film", "Planet"].includes(model)) {
    return next();
  } else {
    const { statusCode, message } = new ErrorHandler("Invalid model");
    res.status(statusCode).send({ error: message });
  }
};
