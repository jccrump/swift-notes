const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verifyToken = require("../helpers/verifyToken");
const saltRounds = 10;
const dotenv = require("dotenv");
dotenv.config();

router.post("/login", (req, res) => {
  console.log(req.body);
  userModel
    .findOne({ email: req.body.email })
    .then(user => {
      if (user.access_allowed) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            jwt.sign({ user }, process.env.SECRET, (err, token) => {
              if (err) {
                console.log(err);
              } else {
                res.header("Authorization", token).send(token);
              }
            });
          }
        });
      }
    })
    .catch(err => console.log(err));
});

router.post("/register", (req, res) => {
  bcrypt
    .hash(req.body.password, saltRounds)
    .then(function(hash) {
      req.body.password = hash;

      let user = {
        ...req.body
      };

      let data = new userModel(user);
      data.save();
      res.json({ message: "It works" });
    })
    .catch(err => console.log(err));
});

router.get("/notes", verifyToken, (req, res) => {
  res.send(req.user);
});
router.post("/quicknote", verifyToken, (req, res) => {
  console.log(req.body);
  userModel.findOneAndUpdate(
    { email: req.user.email },
    { quicknote: req.body.quicknote },
    (err, response) => {
      if (err) console.log(err);
      res.send("It worked");
    }
  );
});
router.get("/quicknote", verifyToken, (req, res) => {
  userModel.findOne({ email: req.user.email }).then(doc => {
    res.send(doc.quicknote);
  });
});
module.exports = router;
