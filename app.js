var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var gerantRouter = require('./routes/gerant');
var formulaireRouter = require('./routes/formulaire');
var contactRouter = require('./routes/contact');
var commandesRouter = require('./routes/commandes');
var usersRouter = require('./routes/users');
var app = express();
var engines = require('consolidate');
const bodyParser = require('body-parser')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine("pug",engines.pug);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bs/',express.static(path.join(__dirname,'node_modules/bootstrap/dist')));
app.use('/', indexRouter);
app.use('/gerant', gerantRouter);
app.use('/formulaire', formulaireRouter);
app.use('/contact', contactRouter);
app.use('/commandes', commandesRouter);
app.use('/users', usersRouter);

//traitement de la commande
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/commandes', (req, res) => {
	console.log('Id: ' + req.body.id)
	console.log('Quantité: ' + req.body.quantite)
	console.log('Prénom: ' + req.body.prenom)
	
	res.redirect('/commandes')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
