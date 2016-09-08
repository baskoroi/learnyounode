const url = require('url')
const http = require('http')

const port = process.argv[2]
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true)

    let data;

    let date = new Date(query.iso)
    if (pathname === '/api/parsetime') {
        data = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    } else if (pathname === '/api/unixtime') {
        data = {
            "unixtime": date.getTime()
        }
    }

    if (data) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(data))
    }
    else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(port)