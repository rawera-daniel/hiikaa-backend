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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
