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
  .get("/getHandle", (req, res) => {
    res.send(model.GetHandle(req.body));
  })
  .post("/", (req, res) => {
    res.send(model.Add(req.body));
  })
  .post("/Register", (req, res) => {
    res.send(model.Register(req.body));
  })
  .patch("/", (req, res) =>
    res.send(model.Delete(req.body.handle, req.body.friend))
  )
  .delete("/", (req, res) =>
    res.send(model.Delete(req.body.handle, req.body.friend))
  );

module.exports = app;
