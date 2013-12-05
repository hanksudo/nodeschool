'use strict';

var http = require('http');
var fs = require('fs');
var path = process.argv[2];

var server = http.createServer(function (req, res) {
    var src = fs.createReadStream(path);
    src.pipe(res);
});

server.listen(8000);
