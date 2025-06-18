const mongoose = require("mongoose");
const { Schema } = mongoose;

const dictionarySchema = new Schema({
  word: {
    type: String,
    required: [true, "A dictionary must have a word"],
    unique: true,
    trim: true,
  },
  definition: {
    type: String,
    required: [true, "A dictionary must have a definition"],
    trim: true,
  },
  example: {
    type: String,
    trim: true,
  },
  synonyms: {
    type: [String],
    default: [],
  },
  antonyms: {
    type: [String],
    default: [],
  },
});

const Dictionary = mongoose.model("Dictionary", dictionarySchema);

module.exports = Dictionary;
