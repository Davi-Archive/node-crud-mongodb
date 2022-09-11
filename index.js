const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


const personRoutes = require('./routes/personRoutes')


const pdfTemplate = require("./documents");







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