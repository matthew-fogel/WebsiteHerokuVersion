var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('post1', { title: 'Matthew Fogel'});
});

module.exports = router;