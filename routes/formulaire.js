var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('formulaire',{ title: 'Formulaire'});
	
});

module.exports = router;
