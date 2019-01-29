[1mdiff --git a/server.js b/server.js[m
[1mindex bc51457..6aedfe1 100644[m
[1m--- a/server.js[m
[1m+++ b/server.js[m
[36m@@ -1,7 +1,7 @@[m
 var express = require('express');[m
 var middleware = require('./middleware.js');[m
 var app = express();[m
[31m-var PORT = 3000;[m
[32m+[m[32mvar PORT = process.env.PORT || 3000;[m
 [m
 // app.get('/', function (req, res) {[m
 //     res.send('hello');[m
