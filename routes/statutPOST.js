var express = require('express');
var router = express.Router();
var fs = require('fs');


router.post('/:numerocommande',function(req,res,next) {
	var file=__dirname+'./../data/commandes.json';
	var cdedata=fs.readFileSync(file, 'utf8');
	var cdejson=JSON.parse(cdedata)["articles"];
	var numcommande= req.params.numerocommande;
	if(numcommande < cdejson.length)
			res.send("Commande");
	else
		res.send("Pas de commande");
});

module.exports = router;