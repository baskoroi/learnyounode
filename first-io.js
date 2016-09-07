const fs = require('fs');

const filename = process.argv[2];
let str = fs.readFileSync(filename).toString();
let newlines = str.split('\n').length - 1;

console.log(newlines);