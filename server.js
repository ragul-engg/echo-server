const express = require("express");
const app = express();

const PORT = 9000;

app.use(express.json());

app.get("/echo", (req, res) => {
  res.send(req);
});

app.put("/echo", (req, res) => {
  res.send(req.body);
});

app.post("/echo", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`server is started in port ${PORT}`);
});
