var express  = require( 'express' ),
    bp       = require('body-parser' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'node_modules' )));
app.use(bp.json());

// MongoDB
require("./server/config/mongoose.js");

// Routes
require("./server/config/routes.js")(app);

app.listen( port, function() {
    //noinspection JSAnnotator
    console.log( `server running on port ${ port }` );
});
