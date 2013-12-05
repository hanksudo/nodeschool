// Filtered LS
var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, list) {
    list.forEach(function(file) {
        var regexp = new RegExp('\\.' + ext + '$');
        if (regexp.test(file)) console.log(file);
    });
});