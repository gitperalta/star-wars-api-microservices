const Planet = require("../data/index.js");
const axios = require("axios");

module.exports = async (req, res) => {
  const planets = await axios
    .get("http://database:8004/Planet")
    .then((response) => response.data);
  res.status(200).send(planets);
};
