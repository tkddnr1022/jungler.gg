var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "JUNGLER.GG", home: "http://vertigy.run.goorm.io/" });
});

/*
router.get('/search', function(req, res, next) {
  res.render('search', { title: "Search" });
});
*/

module.exports = router;
