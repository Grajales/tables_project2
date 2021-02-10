const express = require('express');
const router = express.Router();
// Add fruit model
const Trivia = require('../models').Trivia;
const User =require('../models').User;
// const Season = require("../models").Season;

//Sequelize GET route
router.get("/", (req, res) => {
  Trivia.findAll().then((trivias) => {
    res.render("index.ejs", {
      trivias: trivias,
    });
  });
});
//Get one Trivia Question- SHOW Route
router.get("/:id", (req, res) => {
  Trivia.findByPk(req.params.id).then((trivia) => {
    res.render("show.ejs", {
      trivia: trivia,
    });
  });
});
//Create a Trivia Question- POST route
router.post("/", (req, res) => {
  Trivia.create(req.body).then((newTrivia) => {
    res.redirect("/trivias");
  });
});
//Delete a Trivia Question - DELETE route
router.delete("/:id", (req, res) => {
  Trivia.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/trivias");
  });
});
//Update a Trivia Question - render EDIT & UPDATE
router.get("/:id/edit", function (req, res) {
  Trivia.findByPk(req.params.id).then((trivia) => {
    res.render("edit.ejs", {
      trivia: trivia,
    });
  });
});
//Update
router.put("/:id", (req, res) => {
  Trivia.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((trivia) => {
    res.redirect("/trivias");
  });
});







module.exports = router;