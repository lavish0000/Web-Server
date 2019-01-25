var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function (req, res) {
//     res.send('hello');
// });
var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('privae route hit');
        next();
    },
    logger: function (req, res, next) {
        var date = new Date().toString();
        console.log(req.method + ' ' + req.originalUrl);
        console.log('date ' + date);
        next();
    }
};
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