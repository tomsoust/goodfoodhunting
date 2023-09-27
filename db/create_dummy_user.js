// this is just to creat a first dummy user, re run it by using node in the terminal


const pg = require('pg')
const bcrypt = require('bcrypt')

const db = require('./index.js')



const email = 'dt@ga.co'
const password = 'pudding'
const saltRounds = 10;

const sql = `
INSERT INTO users (email, password_digest)
VALUES ($1, $2);`

bcrypt.genSalt(saltRounds, function(err, salt) {
  bcrypt.hash(password, salt, function(err, hash) {
    db.query(sql, [email, hash], () => {
      if (err) {
        console.log(err)
      }else {
        console.log('user created');
      }
    })

  });
});
