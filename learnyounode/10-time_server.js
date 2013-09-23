// time server
var net = require('net');
var moment = require('moment');

var server = net.createServer(function(c) {
    console.log('server connected');
    c.on('end', function() {
        console.log('server disconnected');
    });

    c.write(moment().format('YYYY-MM-DD HH:mm'));
    c.end();
});

server.listen(8000);