const axios = require("axios");

module.exports = async (req, res) => {
  const newFilm = await axios
    .post("http://database:8004/Film", req.body)
    .then((response) => response.data);
  res.status(200).send(newFilm);
};
