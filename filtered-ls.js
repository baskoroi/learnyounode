const fs = require('fs');

const dir = process.argv[2];
const ext = process.argv[3];

fs.readdir(dir, (err, list) => {
    if (err) console.error(err);

    let re = new RegExp('\.' + ext + '$');
    list.map((file) => { if (file.match(re)) console.log(file) });
});