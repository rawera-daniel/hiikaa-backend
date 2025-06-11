const express = require("express");

const app = express();

const dictionaryRouter = require("./routes/dictionaryRoutes");
const userRouter = require("./routes/userRoutes");

// Middleware to parse JSON
app.use(express.json());

app.use("/api/v1/dictionaries", dictionaryRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
