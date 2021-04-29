//Copied from class.  **testing**

const express = require("express");
const model = require("../models/users");
const { LoginRequired } = require("./security");

const app = express.Router();

app
  .get("/", LoginRequired, (req, res) => {
    res.send(model.GetAll());
  })
  .get("/:user_id", LoginRequired, (req, res) =>
    res.send(model.Get(req.params.user_id))
  )
  .post("/", LoginRequired, (req, res) => {
    res.send(model.Add(req.body));
  })
  .post("/register", (req, res, next) => {
    model
      .Register(req.body)
      .then((user) => res.send(user))
      .catch(next);
  })
  .post("/login", (req, res, next) => {
    model
      .Login(req.body.handle, req.body.password)
      .then((user) => res.send(user))
      .catch(next);
  })
  .patch("/update", LoginRequired, (req, res, next) => {
    model
      .Update(req.body.user)
      .then((user) => res.send(user))
      .catch(next);
  })
  .delete("/:user_id", LoginRequired, (req, res) =>
    res.send(model.Delete(req.params.user_id))
  );

module.exports = app;
