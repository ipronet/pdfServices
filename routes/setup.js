const express = require("express");

const router = express.Router();

const {
Convert,
Health
} = require("../controllers/convert");

router.route("/").post(Convert);
router.route("/").get(Health);
module.exports = router;
