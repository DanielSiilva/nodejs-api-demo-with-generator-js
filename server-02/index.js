const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.post("/receive-posts", (req, res) => {
  console.log("Post received:", req.body);

  res.send("Post received and processed");
});

app.listen(port, () => {
  console.log(`Destination server running at http://localhost:${port}`);
});
