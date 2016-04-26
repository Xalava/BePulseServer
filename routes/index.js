var express = require('express');
var router = express.Router();

var defis = require("../modules/defis.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  var listeDefis = defis.getListeDefis();
  console.log(listeDefis);
  res.render('index', { titre: 'BePulse', defis: listeDefis });
});

router.get('/profile', function(req, res, next) {
  res.render('profile', { titre: 'BePulse - profile' });
});

router.get('/admin', function(req, res, next) {
  res.render('admin', { titre: 'BePulse - Admin Panel' });
});

router.get('/initDB', function(req, res, next) {
  defis.initDefis();
  res.render('admin', { titre: 'DB OK' });
});


var dernierpush = 'Remix My Energy'

router.get('/lastpush', function(req, res, next) {
	res.send(dernierpush);
	// console.log(dernierpush );
});

router.put('/setpush', function(req, res, next) {
	// console.log('body: ' + JSON.stringify(req.body));
	dernierpush = req.body.nom;
});

module.exports = router;
