const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("./routes/index.js");

server.use(express.json());

server.use(morgan("dev"));

server.use("/films", router);

server.use("*", (req, res) => res.status(404).json({ message: "Not Found" }));

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({ error: true, message: err.message });
});

module.exports = server;
