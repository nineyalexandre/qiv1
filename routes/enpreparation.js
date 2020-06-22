var express = require('express');
var router = express.Router();
var fs = require('fs');


//lecture de commandes json
router.get('/',function (req, res, next){
	var file=__dirname+'./../data/commandes.json';
	var cdesdata=fs.readFileSync(file, 'utf8');
	var cdesjson=JSON.parse(cdesdata)["articles"];

	res.render("enpreparation",{
		file: cdesjson, title: 'En préparation'
	});
});

module.exports = router;