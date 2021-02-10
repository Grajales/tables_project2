const express = require('express');
const router = express.Router();
// Add fruit model
const Trivia = require('../models').Trivias;
// const Trivia = require('../models').Trivia;
const User =require('../models').User;
// const Languages = require("../models").Languages;

//Sequelize GET route
router.get("/", (req, res) => {
  Trivia.findAll().then((trivias) => {
    console.log(trivias)
    res.render("index.ejs", {
      trivias: trivias,
    });
  });
});
//put this above your show.ejs file
router.get("/new", (req, res) => {
  res.render("new.ejs");
});
//Create a Trivia Question- POST route
router.post("/", (req, res) => {
  Trivia.create(req.body).then((newTrivia) => {
    res.redirect("/trivias");
  });
});
//Get one Trivia Question- SHOW Route
router.get("/:id", (req, res) => {
  Trivia.findByPk(req.params.id, {
      include : [{
          model: User,
          attributes: ['name']
      }],
      attributes: ['question', 'answer', 'wrong1', 'wrong2', 'wrong3']
  })
  .then(trivia => {
    console.log(trivia);
      res.render('show.ejs', {
          trivia: trivia
      });
  })
});
//Update a Trivia Question - render EDIT & UPDATE
router.get("/:id/edit", function (req, res) {
  Trivia.findByPk(req.params.id).then((trivia) => {
    console.log(trivia);
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
//Delete a Trivia Question - DELETE route
router.delete("/:id", (req, res) => {
  Trivia.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/trivias");
  });
});







module.exports = router;