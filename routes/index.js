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


var dernierpush = 'Remix My Energy'

router.get('/lastpush', function(req, res, next) {
	res.send(dernierpush);
	console.log(dernierpush );
});

router.put('/setpush', function(req, res, next) {
	console.log('body: ' + JSON.stringify(req.body));
	dernierpush = req.body.nom; 
	// res.send('Successfull put');

});

module.exports = router;

