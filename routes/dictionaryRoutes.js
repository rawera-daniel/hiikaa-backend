const fs = require("fs");
const express = require("express");

const dictionaries = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/dictionary.json`, "utf-8")
);

const getAllDictionaries = (req, res) => {
  res.status(200).json({
    status: "success",
    results: dictionaries.length,
    data: {
      dictionaries,
    },
  });
};

const createDictionaries = (req, res) => {
  const newId = dictionaries[dictionaries.length - 1]._id + 1;
  const newDictionary = Object.assign({ _id: newId }, req.body);

  dictionaries.push(newDictionary);
  fs.writeFile(
    `${__dirname}/dev-data/data/dictionary.json`,
    JSON.stringify(dictionaries),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          dictionaries: newDictionary,
        },
      });
    }
  );
};

const updateDictionaries = (req, res) => {
  if (req.params.id * 1 > dictionaries.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      dictionary: "<Updated dictionary here..>",
    },
  });
};

const deleteDictionaries = (req, res) => {
  if (req.params.id * 1 > dictionaries.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};

const router = express.Router();

router.route("/").get(getAllDictionaries).post(createDictionaries);

router.route("/:id").patch(updateDictionaries).delete(deleteDictionaries);

module.exports = router;
