const response = require("../utils/response.js");
const axios = require("axios");

module.exports = async (req, res) => {
  const newCharacter = await axios
    .post("http://database:8004/Character", req.body)
    .then((response) => response.data);
  response(res, 201, newCharacter);
};
