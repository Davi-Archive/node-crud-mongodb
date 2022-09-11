const router = require('express').Router()
const pdfTemplate = require('../models/')


router.get('/', (req,res)=>{
    res.json({
        connected: 'connected'
    })
})

module.exports = router;