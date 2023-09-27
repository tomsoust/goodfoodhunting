const express = require('express')
const router = express.Router()
const db = require('../db')
const ensureLoggedIn = require('../middlewares/ensure_logged_in')

router.get('/dishes/new', ensureLoggedIn, (req, res) => {
    
  res.render('new_form')
})

router.post('/dishes', ensureLoggedIn, (req, res) => {

  let title = req.body.title
  let imageUrl = req.body.image_url
  // let userId = req.session.userId

  const sql = `INSERT INTO dishes (title, image_url, user_id) VALUES ($1, $2, $3);`
  db.query(sql,[title, imageUrl, req.session.userId], (err, dbRes) => {
    if(err) {
      console.log(err)
    }
  })
 
  // res.send('thanks for making me rich')
  res.redirect('/')
})

router.delete('/dishes/:id', ensureLoggedIn, (req, res) => {

  const sql = `DELETE FROM dishes WHERE id = ${req.params.id};`
  db.query(sql, (err, dbRes) => {
    if(err) {
      console.log(err)
    }
    res.redirect('/')
  })
    
})


router.get('/dishes/:id', (req, res) => {
  
  // const sql = `SELECT * FROM dishes WHERE id = ${req.params.id};`
  const sql = `SELECT * FROM dishes WHERE id = $1;`
  const values = [req.params.id]


  db.query(sql, values,  (err, dbRes) => {
    if(err) {
      console.log(err)
    }

    let dish = dbRes.rows[0]


    res.render('show', {dish})
  })

})

router.get('/dishes/:id/edit', (req, res) => {
  let dishId = req.params.id
  let sql = `SELECT * FROM dishes WHERE id = $1;`

  db.query(sql, [dishId], (err, dbRes) => {
    if(err) {
      console.log(err)
    }
    let dish = dbRes.rows[0]
    res.render('edit_form', {dish})
  })

})

router.put('/dishes/:id', (req, res) => {
  
  const sql = `UPDATE dishes 
  SET title = $1, image_url = $2
   WHERE id = $3;`

   const values = [req.body.title, req.body.image_url, req.params.id]

    db.query(sql, values, (err, dbRes) => {
      if (err) {
        console.log(err);
      }
      
      
      
      res.redirect(`/dishes/${req.params.id}`)
    })
  
})

module.exports = router

