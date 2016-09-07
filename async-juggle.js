const http = require('http');
const urls = process.argv.slice(2);
const results = new Array(urls.length);
let count = 0;

urls.map((url, i) => {
    http.get(url, (res) => {
        let str = '';
        res.on('data', (data) => {
            str += data.toString();
        });
        res.on('end', () => {
            results[i] = str;
            count++;
            if (count === urls.length) {
                results.map((result) => { console.log(result) });
            }
        });
    });
});