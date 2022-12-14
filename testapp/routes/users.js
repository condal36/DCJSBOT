var express = require('express');
const dotenv = require('dotenv');
var sqlite3 = require('sqlite3').verbose();
const cors = require('cors')

var router = express.Router();

router.use(function(req,res,next){
  console.log(req.method, req.url);
  next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  var result='';
  dotenv.config(); 
  const file = process.env.SQpath;
  var db = new sqlite3.Database(file);
  var dbresult;
  db.serialize(function(dbresult) {
    db.all('SELECT name FROM user WHERE name = ?', ['Alin'], function (err, rows) {
      if (err) {
          return console.log('find Alice error: ', err.message)
      }
      i=0
      while(rows[i]){
        result+='respond with a username:'+rows[i].name+'\n';
        i++
      }
      res.send(result);
    })
  })
});
router.get('/:usernumber', function(req, res, next) {
  var result='';
  dotenv.config(); 
  const file = process.env.SQpath;
  var db = new sqlite3.Database(file);
  var dbresult;
  db.serialize(function(dbresult) {
    db.all('SELECT name FROM user WHERE name = ?', ['Alin'], function (err, rows) {
      if (err) {
          return console.log('find Alice error: ', err.message)
      }
      i=0
      while(rows[i]){
        result+='respond with a username:'+rows[req.params.usernumber].name+'\n';
        i++
      }
      res.send(result);
    })
  })
});
module.exports = router;
