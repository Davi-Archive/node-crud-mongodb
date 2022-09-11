const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pdf = require('html-pdf');
const bodyParser = require('body-parser');


const app = express(); // inicia express


require('dotenv').config();


const { PdfModel } = require('./models');

const personRoutes = require('./routes')
const pdfTemplate = require('./routes')









//LER JSON
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())
//Rotas API
//#Person
app.use('/person', personRoutes)
//#Pdf
app.use('/pdf', pdfTemplate)

// ROTAS

app.get('/', (req, res) => {
    res.json({ msg: 'Oi express' })
})
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('conectado ao mongo db')
        app.listen(3000)
    })
    .catch()


module.exports = app;