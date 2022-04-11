var express = require('express');
var router = express.Router();

Linija = require('../models/linija');

router.get('/', function(req, res, next) {
  Linija.getLinije(function(err, linije){
  	if(err){
  		console.log(err);
  		res.send(err);
  	} else {
  		res.render('index', { "linije": linije });
  	}
  });
});

module.exports = router;
