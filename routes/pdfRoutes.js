const pdfRouter = require('express').Router()
const pdfTemplate = require('../models/')
const pdf = require("html-pdf");




pdfRouter.post('/', (req, res)=>{
    pdf.create(pdfTemplate(req.body),{})
})

pdfRouter.get("/", (req, res) => {
  res.json({
    connected: "connected PDF",
  });
});

module.exports = pdfRouter;