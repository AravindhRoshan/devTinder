const express = require("express");
const app = express();
const port = 7777;

app.use("/", (req, res) => {
  res.send("Hello world");
});
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
