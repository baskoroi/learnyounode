const ls = require('./ls.js');

const dir = process.argv[2];
const ext = process.argv[3];

ls(dir, ext, (err, results) => {
    if (err) {
        return console.error(err);
    }

    results.map((file) => { console.log(file); });
});