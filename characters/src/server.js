const express = require("express");
const morgan = require("morgan");
const router = require("../src/routes/index.js");
const server = express();

server.use(express.json());

server.use(morgan("dev"));

server.use("/characters", router);

server.use("*", (req, res) => res.status(404).json({ message: "Not Found" }));

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({ error: true, message: err.message });
});

module.exports = server;
