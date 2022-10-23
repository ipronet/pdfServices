const express = require("express");

const router = express.Router();

const {
Convert
} = require("../controllers/convert");

router.route("/").post(Convert);

module.exports = router;
