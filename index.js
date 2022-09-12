const express = require("express");
const mongoose = require("mongoose");
/* const cors = require("cors");
const bodyParser = require("body-parser"); */

const app = express(); // inicia express

require("dotenv").config();

const { pdfRouter, personRouter } = require("./routes");


/* app.use(cors())

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json)
//LER JSON
 */


app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//Rotas API
//#Person
app.use("/person", personRouter);
//#Pdf
app.use("/pdf", pdfRouter);

// ROTAS

app.get("/", (req, res) => {
  res.json({ msg: "Oi express" });
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("conectado ao mongo db");
    app.listen(3000);
  })
  .catch();

module.exports = app;
