//New code from class

const path = require("path");
const express = require("express");

const usersCtrl = require("./controllers/users");
const postsCtrl = require("./controllers/posts");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(express.json())
  .use(express.static("./docs"))

  .use("/users", usersCtrl)
  .use("/posts", postsCtrl)

  // All the way at the end of the pipeline. Return instead of not found
  .get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../docs/index.html"));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
