const express = require("express");
const {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUsers);

router.route("/:id").patch(updateUsers).delete(deleteUsers);

module.exports = router;
