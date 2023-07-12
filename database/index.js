const server = require("./src/server.js");
const { Character, Film } = require("./src/db/index.js");
const PORT = 8004;

// Character.find()
//   .populate("homeworld", ["_id", "name"])
//   .populate("films", ["_id", "title"])
//   .then((data) => console.log(data[0]));

// Character.get(1).then((data) => console.log(data));

// Character.insert({
//   _id: "123456789",
//   name: "Sebastian Peralta",
//   height: "170",
//   mass: "70",
//   hair_color: "black",
//   skin_color: "light",
//   eye_color: "brown",
//   birth_year: "29BBY",
//   gender: "male",
//   homeworld: "3",
//   films: ["1", "2"],
// }).then((data) => console.log(data));

// Film.list().then((data) => console.log(data[0]));

server.listen(PORT, () => {
  console.log(`Database service listening on port ${PORT}`);
});
