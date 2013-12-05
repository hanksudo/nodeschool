'use strict';

// Baby Steps
var arr = process.argv.slice(2);
var sum = 0;
for (var i=0; i<arr.length; i++) {
    sum += Number(arr[i]);
}

console.log(sum);
