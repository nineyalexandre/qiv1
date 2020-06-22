var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/:numerocommande',function(req,res,next) {
	
	var file=__dirname+'./../data/commandes.json';
	var cdedata=fs.readFileSync(file, 'utf8');
	var cdejson=JSON.parse(cdedata);
	var numcommande= req.params.numerocommande;

	var cdejsonIdent = chercheCde(cdejson["articles"], numcommande);

	res.set('Content-type' , 'application/json;charset=UTF-8');
	res.end(JSON.stringify(cdejsonIdent, null, 2));

});

router.get('/:numerocommande',function(req,res,next) {
	var file=__dirname+'./../data/commandes.json';
	var cdedata=fs.readFileSync(file, 'utf8');
	var cdejson=JSON.parse(cdedata)["articles"];
	var numcommande= req.params.numerocommande;
	
	if(numcommande <= cdejson.length)
		var bonNo = true;
	else
		var bonNo = false;
	
	res.render("statut",{
		file: cdejson, numcommande, bonNo, title: 'Statut'
	});
});

// Fonction pour chercher le numéro de commande dans le json
function chercheCde (file, numCommande){
	for(cde in file){
		if(file[cde]['numero'] == numCommande){
			return file[cde];
		}
	}
	return "Pas de commande à ce numéro";
}

module.exports = router;