var express = require('express');
var router = express.Router();

/* GET post1 page. */
router.get('/', function(req, res, next) {
  res.render('posts/post1', { title: 'Matthew Fogel'});
});

module.exports = router;
