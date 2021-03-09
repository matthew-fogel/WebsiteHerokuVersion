var express = require('express');
var router = express.Router();

/* GET post1 page. */
router.get('/:postNumber', function(req, res, next) {
  postNum = req.params.postNumber
  postPath = 'posts/' + postNum
  res.render(postPath, { title: 'Matthew Fogel'});
});

module.exports = router;
