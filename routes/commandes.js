var express = require('express');
var router = express.Router();
var fs = require('fs');
const bodyParser = require('body-parser')


router.get('/', function(req, res, next) {
  res.render('commandes',{ title: 'Commandes'});
	
});

//traitement de la commande
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/', (req, res) => {
	var nbCde = 0;
	var commande = req.body
	var file=__dirname+'./../data/commandes.json';
	var articledata=fs.readFileSync(file, 'utf8');
	var articlejson=JSON.parse(articledata)["articles"];
	
	console.log('Id: ' + req.body.id)
	console.log('Quantité: ' + req.body.quantite)
	console.log('Prénom: ' + req.body.prenom)
	for(key in articlejson){
		nbCde ++;
	}
	res.render('commandes', {commande: commande, numCde : nbCde +1, title: 'Commandes'});
})

module.exports = router;