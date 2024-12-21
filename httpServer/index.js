const http = require('http');

const myServer = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("hello from server")
})

myServer.listen(3000,()=>console.log('server is running'))