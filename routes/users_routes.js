const express = require('express')

const router = express.Router()
const db = require('../db')

router.get('/signup', (req, res) => {
  res.render('signup')
})


router.post('/users', (req, res) => {
  
  res.redirect
})


module.exports = router