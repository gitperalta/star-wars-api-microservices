const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  _id: String,
  title: String,
  opening_crawl: String,
  director: { type: String, default: "George Lucas" },
  producer: { type: String, default: "George Lucas" },
  release_date: { type: Date, default: Date.now },
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = function () {
  return this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = function (id) {
  return this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.insert = function (film) {
  return this.create(film);
};

module.exports = filmSchema;
