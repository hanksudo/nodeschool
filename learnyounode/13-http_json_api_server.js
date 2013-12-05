'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    var parsedstring = url.parse(req.url, true);
    var time = new Date(parsedstring.query.iso);
    var data;

    switch(parsedstring.pathname) {
    case '/api/parsetime':
        data = {
            'hour': time.getHours(),
            'minute': time.getMinutes(),
            'second': time.getSeconds(),
        };
        break;
    case '/api/unixtime':
        data = {
            'unixtime': time.getTime()
        };
        break;
    }

    if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(8000);
