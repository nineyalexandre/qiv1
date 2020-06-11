function lireArticles(){
	const fs = require('fs')

	fs.readFile('../javascripts/test.txt', 'utf8' , (err, data) => {
		if (err) {
			document.getElementById("articles").innerHTML = err
			return
		}
		document.getElementById("articles").innerHTML = data
	})

}
 