// Make it modular
var filtered_ls = require('./module_filtered_ls_for_6');

filtered_ls(process.argv[2], process.argv[3], function(err, list) {
    if (err) return console.err(err);

    console.log(list.join('\n'));
});
