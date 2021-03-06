
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , books = require('./routes/books')
  , http = require('http')
  , path = require('path');

var app = express();
var publicFolder = path.normalize(__dirname + '/../app');
var angularFolder = path.normalize(__dirname + '/../angular/app');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(publicFolder));
//app.use(express.static(angularFolder));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', express.static(publicFolder + "/index.html"));
app.get('/users', user.list);
app.get('/books', books.list);
app.get('/books/:id', books.details);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
