const express = require("express");
const router = express.Router();

// Controller
const { register } = require("../controllers/UseController");

//Routes
router.post("/register", register);

module.exports = router;
