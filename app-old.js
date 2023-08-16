
const http = require('http');


http.createServer((req, res) => {

    console.log(req)

    res.writeHead(404)

    res.write('404 | page not found')
    res.end()
}).listen(3000)

console.log('Escuchando servidor en http://localhost:3000/')