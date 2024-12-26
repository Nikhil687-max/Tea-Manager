// const http = require('http')
import http from 'http'
import { hostname } from 'os';
const host = hostname;
const port = 3002;

const server = http.createServer((req,res) => {
    // if(req.)
    if (req.url == '/') {
        res.statusCode = (200);
    
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello Dear");
        // res.end('This is to check if 2 responces can be generated simultaneously');
    }
    else{
        res.statusCode = (404);
        res.setHeader('Content-Type', 'text/plain');
        res.end('Sorry dear We cold not found it for u');
    }
})


server.listen(port, host, () => {
    console.log(`Node server Created sucessfully and listening to http://${host}:${port}`);
})

