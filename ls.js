const fs = require('fs');
const path = require('path');

module.exports = (dir, ext, callback) => {

    fs.readdir(dir, (err, list) => {
        if (err) return callback(err);

        let filtered = list.filter((file) => path.extname(file) === '.' + ext);
        callback(err, filtered);
    });
};