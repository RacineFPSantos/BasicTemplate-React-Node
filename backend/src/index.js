const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const { MONGO_URI, HTTP_PORT } = process.env;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

/* middleware */
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* rotas */
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(HTTP_PORT, () => {
  console.log(`Servidor rodando na porta ${HTTP_PORT}`);
});
