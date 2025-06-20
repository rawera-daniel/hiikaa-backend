const fs = require("fs");
const Dictionary = require("../models/dictionaryModel");

const dictionaries = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/dictionary.json`, "utf-8")
);

exports.getAllDictionaries = async (req, res) => {
  try {
    const dictionaries = await Dictionary.find();

    res.status(200).json({
      status: "success",
      results: dictionaries.length,
      data: {
        dictionaries,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.createDictionaries = async (req, res) => {
  try {
    const newDictionary = await Dictionary.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        dictionary: newDictionary,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.updateDictionaries = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      dictionary: "<Updated dictionary here..>",
    },
  });
};

exports.deleteDictionaries = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
