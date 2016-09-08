const net = require('net');

function zeroFill(num) {
    return ((num < 10) ? '0' : '') + num;
}

const port = process.argv[2];
const server = net.createServer((socket) => {
    // "YYYY-MM-DD hh:mm"
    let date = new Date();
    
    let str = date.getFullYear() + '-' + 
        zeroFill(date.getMonth() + 1) + '-' +
        zeroFill(date.getDate()) + ' ' + 
        zeroFill(date.getHours()) + ':' + 
        zeroFill(date.getMinutes());

    socket.write(str + '\n');
    socket.end();
});
server.listen(port);