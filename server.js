const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

const dictionaries = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/dictionary.json`, "utf-8")
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

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
const createUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
const updateUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
const deleteUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

app
  .route("/api/v1/dictionaries")
  .get(getAllDictionaries)
  .post(createDictionaries);

app
  .route("/api/v1/dictionaries/:id")
  .patch(updateDictionaries)
  .delete(deleteDictionaries);

app.route("/api/v1/users").get(getAllUsers).post(createUsers);

app.route("/api/v1/users/:id").patch(updateUsers).delete(deleteUsers);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
