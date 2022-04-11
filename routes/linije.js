var express = require('express');
var router = express.Router();

Linija = require('../models/linija');

router.get('/', function(req, res, next) {
  Linija.getLinije(function(err, linije){
  	if(err){
  		console.log(err);
  		res.send(err);
  	} else {
  		res.render('linije/index', { "linije": linije });
  	}
  });
});

router.get('/:id/detalji', function(req, res, next) {
  Linija.getLinijaById([req.params.id],function(err, linija){
  	if(err){
  		console.log(err);
  		res.send(err);
  	} else {
  		res.render('linije/detalji', { "linija": linija });
  	}
  });
});

module.exports = router;
