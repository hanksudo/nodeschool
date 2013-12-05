'use strict';

// juggline async
var http = require('http');
var urls = process.argv.slice(2);
var finished = 0;
var i = 0;
var body = [];

var request = function(url, idx, cb) {
    http.get(url, function(res) {
        body[idx] = '';
        res.setEncoding('utf8');

        res.on('data', function(data) {
            body[idx] += data;
        });

        res.on('end', function() {
            cb();
        });
    });
};

urls.forEach(function(url) {
    request(url, i, function() {
        finished++;
        if (finished === urls.length) {
            console.log(body.join('\n'));
        }
    });
    i++;
});
