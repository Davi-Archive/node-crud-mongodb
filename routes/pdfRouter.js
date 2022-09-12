const pdfRouter = require("express").Router();
const { PdfModel } = require("../models");
const pdf = require("html-pdf");

pdfRouter.post("/", (req, res) => {
  pdf.create(PdfModel(req.body), {}).toFile(`${__dirname}/result.pdf`, (err) => {
   console.log(req.body);
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

pdfRouter.get("/", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

module.exports = pdfRouter;
