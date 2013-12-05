module.exports = function(path, ext, cb) {

    var fs = require('fs');
    var regexp = new RegExp('\\.' + ext + '$');

    fs.readdir(path, function(err, list) {

        if (err) return cb(err, null);

        var filtered = list.filter(function(file) {
            return regexp.test(file);
        });

        cb(null, filtered);
    });
};