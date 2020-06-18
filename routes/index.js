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
		file: articlejson
	});
});

module.exports = router;
