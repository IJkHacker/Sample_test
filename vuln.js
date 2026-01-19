const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/run", (req, res) => {
  const cmd = req.query.cmd;
  exec(cmd, (err, output) => {
    res.send(output);
  });
});

app.listen(3000);
eval(req.query.input);
