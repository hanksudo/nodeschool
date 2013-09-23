// Make it modular
var module6 = require('./filtered_ls');

module6(process.argv[2], process.argv[3], function(err, list) {
    if (err) return console.err(err);

    console.log(list.join('\n'));
});