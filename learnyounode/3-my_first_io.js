// My first I/O
var fs = require('fs');
var file = process.argv[2];
var buf = fs.readFileSync(file);
var str = buf.toString();
console.log(str.split('\n').length - 1);