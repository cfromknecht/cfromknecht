var express = require( "express" );
var app = express();

app.use( express.static( __dirname + "/assets" ) );

app.get( "/", function( req, res ) {
  res.sendfile( "pages/index.html" );
});

var port = process.env.PORT || 8080;
app.listen( port, function() {
  console.log( "Listening on " + port ) ;
});

