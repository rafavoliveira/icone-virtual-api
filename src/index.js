const express = require("express");
const cors = require("cors");
const router = require("./routes");
const db = require("./database");
var process = require("process");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS,
  })
);
app.use(router);
db.hasConnection();

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor rodando");
});

