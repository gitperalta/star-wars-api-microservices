const server = require("./src/server.js");

const PORT = 8003;

server.listen(PORT, () => {
  console.log(`Planets server is running on port ${PORT}`);
});
