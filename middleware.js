//var request = require('request');


module.exports = {
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