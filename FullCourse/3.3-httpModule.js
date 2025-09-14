// HTTP Module

const http = require('http');

const server = http.createServer((req, res) => {
    //req is the incoming request, while res is the response that we are sending back
    if (req.url === '/') {
        res.writ('Welcome to our home page')
    }

    // '/' means the link to the home page

    //res.write('Welcome to our home page');
    //writes to a server / website
    //res.end();

    if (req.url === '/about') {
        res.end('Here is our short history')
    }

    res.end(`
        <h1>Oops!<h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Home<a>
    `)
})

server.listen(5000);
//to what port the server is listening to