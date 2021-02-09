const express = require('express');
const router = express.Router();
// Add fruit model
const trivias = require("../models/trivias.js");


// Add index route
router.get("/", (req, res) => {
  res.render("index.ejs", {
    trivias: trivias,
  });
});










module.exports = router;