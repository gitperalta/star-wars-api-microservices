const Planet = require("../data/index.js");
const axios = require("axios");

module.exports = async (req, res) => {
  const newPlanet = axios
    .post("http://database:8004/Planet", req.body)
    .then((response) => response.data);
  res.status(200).send(newPlanet);
};
