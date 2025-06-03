const express = require("express");
const app = express();
const PORT = 8000;

const dictionaryRouter = require("./routes/dictionaryRoutes");
const userRouter = require("./routes/userRoutes");

// Middleware to parse JSON
app.use(express.json());

app.use("/api/v1/dictionaries", dictionaryRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
