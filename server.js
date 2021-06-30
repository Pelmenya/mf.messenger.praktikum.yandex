const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

app.get("/get", (req, res) => {
  res.json({ status: "success", message: "Welcome To Testing API" });
});

app.post("/post", (req, res) => {
  res.json({
    status: "success",
    result: "Ок",
  });
});

app.put("/put", (req, res) => {
  console.log(req.body)
  res.json({
    status: "success",
    result: "Ок",
  });
});

app.delete("/delete", (req, res) => {
  res.json({
    status: "success",
    result: "Ок",
  });
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

module.exports = app;
