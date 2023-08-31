const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('login', {
        layout: 'login'
    })
})

router.get('/dashboard', (req, res)=>{
    res.render('dashboard', {
        layout: 'main'
    })
})

router.get('/goals', (req,res)=>{
    res.render('notes', {
        layout: 'main'
    })
})


module.exports = router
