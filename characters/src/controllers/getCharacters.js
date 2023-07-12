const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const characters = await axios("http://database:8004/Character").then(
    (response) => response.data
  );
  response(res, 200, characters);
};
