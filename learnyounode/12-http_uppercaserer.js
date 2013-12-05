'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
    // req is an http.IncomingMessage, which is a Readable Stream
    // res is an http.ServerResponse, which is a Writable Stream

    var body = '';
    // we want to get the data as utf8 strings
    // If you don't set an encoding, then you'll get Buffer objects
    req.setEncoding('utf8');

    var abc;
    console.log(abc);

    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        res.end(body.toUpperCase());
    });
});

server.listen(8000);
