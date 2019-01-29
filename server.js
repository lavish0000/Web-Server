var express = require('express');
var middleware = require('./middleware.js');
var app = express();
var PORT = process.env.PORT || 3000;

// app.get('/', function (req, res) {
//     res.send('hello');
// });

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about',middleware.requireAuthentication, function (req, res) {
    res.send('about us');
});

app.use(express.static(__dirname + '/public'));
//console.log();
app.listen(PORT, function () {
    console.log('you are running on port ' + PORT );
});


//console.log('asasa');