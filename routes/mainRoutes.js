const express = require('express')
const path = require('path')
const router = express.Router()

const rutasControler = require('../controllers/mainController')

router.get('/', rutasControler.landing)

module.exports = router