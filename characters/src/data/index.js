const characters = require("./characters.json");

module.exports = {
  list: async () => characters,
  create: async () => {
    throw Error("Error al crear el personaje");
  },
};
