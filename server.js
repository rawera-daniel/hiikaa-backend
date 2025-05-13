const express = require("express");
const app = express();
const PORT = 8000;

// Middleware to parse JSON
app.use(express.json());

// A simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to your Express backend!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
