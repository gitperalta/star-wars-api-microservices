const Film = require("../data/index.js");
const axios = require("axios");

module.exports = async (req, res) => {
  const films = await axios
    .get("http://database:8004/Film")
    .then((response) => response.data);
  res.status(200).send(films);
};
