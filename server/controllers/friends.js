//Friend Controller

const express = require("express");
const users = require("../models/users");
const posts = require("../models/posts");
const model = require("../models/friends");

const app = express.Router();

app
  .get("/", (req, res) => {
    res.send(model.Get());
  })
  .post("/getHandle", (req, res) => {
    res.send(model.GetHandle(req.body));
  })
  .post("/", (req, res) => {
    res.send(model.Update(req.body));
  })
  .post("/Register", (req, res) => {
    res.send(model.Register(req.body));
  })
  .delete("/", (req, res) => res.send(model.Delete(req.body)));

module.exports = app;
