var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res, next) {
  res.send('users page');
  db.User.findAll({}).then((instance) => {
    console.log(instance);
  });
});

router.get('/:id', function(req, res, next) {
  res.send('users page id');
});

router.post('/insert', function(req, res, next) {
  const name = req.body.name
  db.User.create({
    name: name
  })
  .then(createdUser => {
    console.log('createdUser',createdUser)
  })
});



module.exports = router;
