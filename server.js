const fs = require("fs");
const express = require("express");
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

const dictionaries = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/dictionary.json`, "utf-8")
);

app.get("/api/v1/dictionaries", (req, res) => {
  res.status(200).json({
    status: "success",
    results: dictionaries.length,
    data: {
      dictionaries,
    },
  });
});

app.post("/api/v1/dictionaries", (req, res) => {
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
});

app.patch("/api/v1/dictionaries/:id", (req, res) => {
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
});

app.delete("/api/v1/dictionaries/:id", (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
