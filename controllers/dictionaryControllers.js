const fs = require("fs");

const dictionaries = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/dictionary.json`, "utf-8")
);

exports.CheckID = (req, res, next, val) => {
  if (req.params.id * 1 > dictionaries.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.getAllDictionaries = (req, res) => {
  res.status(200).json({
    status: "success",
    results: dictionaries.length,
    data: {
      dictionaries,
    },
  });
};

exports.createDictionaries = (req, res) => {
  const newId = dictionaries[dictionaries.length - 1]._id + 1;
  // const newDictionary = Object.assign({ _id: newId }, req.body);
  const newDictionary = { _id: newId, ...req.body };

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
