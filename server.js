const express = require("express");
const PORT = 3000;

const app = express();

const options = {
  extensions: [
    "js",
  ],
};

app.use(express.static(`${__dirname}/static`, options));

app.listen(PORT);
