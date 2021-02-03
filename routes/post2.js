var express = require('express');
var router = express.Router();

/* GET post2 page. */
router.get('/', function(req, res, next) {
  res.render('post2', { title: 'Matthew Fogel'});
});

module.exports = router;
