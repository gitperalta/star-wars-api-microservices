const server = require("./src/server.js");

const PORT = 8001;

server.listen(PORT, () => {
  console.log(`Characters server listening on port ${PORT}`);
});
