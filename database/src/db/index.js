const { MONGO_URI } = require("./config/envs.js");
const mongoose = require("mongoose");
const Character = mongoose.model(
    "Character",
    require("./schemas/characterSchema.js")
  ),
  Film = mongoose.model("Film", require("./schemas/filmSchema.js")),
  Planet = mongoose.model("Planet", require("./schemas/planetSchema.js"));

mongoose
  .connect(MONGO_URI)
  .then((_) => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });
console.log();
module.exports = { Character, Planet, Film };
