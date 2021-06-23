const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/login.html' ))
})

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/views/register.html' ))
})

router.get('/holis', (req, res) => {
    res.send('boca la concha de tu madreeee')
})

module.exports = router