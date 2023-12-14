const { catcherAsync } = require("../utils/index.js");

module.exports = {
  getCharacters: catcherAsync(require("./getCharacters")),
  createCharacter: catcherAsync(require("./createCharacter")),
};
