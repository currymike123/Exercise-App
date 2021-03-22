//Friend Controller

const express = require("express");
const users = require("../models/users");
const posts = require("../models/posts");
const model = require("../models/friends");

const app = express.Router();

app
  .get("/", (req, res) => {
    res.send(model.GetAll());
  })
  .get("/:friend_id", (req, res) => res.send(model.Get(req.params.friend_id)))
  .post("/", (req, res) => {
    res.send(model.Add(req.body));
  })
  .patch("/:friend_id", (req, res) =>
    res.send(model.Update(req.params.friend_id, req.body))
  )
  .delete("/:friend_id", (req, res) =>
    res.send(model.Delete(req.params.friend_id))
  );

module.exports = app;
