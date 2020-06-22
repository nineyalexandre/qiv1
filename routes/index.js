var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */

//lecture de la bd json
router.get('/',function (req, res, next){
	var file=__dirname+'./../data/bd.json';
	var articledata=fs.readFileSync(file, 'utf8');
	var articlejson=JSON.parse(articledata)["articles"];
	
	res.render("index",{
		file: articlejson, title: 'Accueil'
	});
});

//redirection vers les site covid
router.get(/.*covid.*/, function(req, res, next) {
  res.redirect('https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/');
	
});

module.exports = router;