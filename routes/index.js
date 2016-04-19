var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { titre: 'BePulse' });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { titre: 'BePulse - profile' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { titre: 'BePulse - Admin Panel' });
});


module.exports = router;

