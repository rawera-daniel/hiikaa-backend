const express = require("express");
const {
  getAllDictionaries,
  createDictionaries,
  updateDictionaries,
  deleteDictionaries,
  CheckID,
} = require("../controllers/dictionaryControllers");

const router = express.Router();

router.route("/").get(getAllDictionaries).post(createDictionaries);

router.route("/:id").patch(updateDictionaries).delete(deleteDictionaries);

module.exports = router;
