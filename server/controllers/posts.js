const express = require("express");
const users = require("../models/users");
const model = require("../models/posts");

const app = express.Router();

app
  .get("/", (req, res) => {
    res.send(model.GetAll());
  })
  .get("/:post_id", (req, res) => {
    console.log("Notebooke here");
    res.send(model.GetNotebook(req.params.post_id));
  })
  .get("/feed/:post_id", (req, res) => {
    console.log(req.body.handle);
    res.send(model.GetFeed(req.params.post_id));
  })
  .post("/", (req, res) => {
    res.send(model.Add(req.body));
  })
  .patch("/:post_id", (req, res) =>
    res.send(model.Update(req.params.post_id, req.body))
  )
  .delete("/:post_id", (req, res) => res.send(model.Delete(req.params.post_id)))
  .get("/notebook", (req, res) => {
    res.send(model.GetNotebook(req.user.handle));
  });

module.exports = app;
