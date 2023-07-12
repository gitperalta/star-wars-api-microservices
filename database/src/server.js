const express = require("express");
const server = express();
const morgan = require("morgan");
const router = require("./routes/index.js");

server.use(morgan("dev"));
server.use(express.json());
server.use(router);

module.exports = server;
