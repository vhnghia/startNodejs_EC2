var http = require('http');
const port = 80;
var url = require('url');
const server = http.createServer((request,response)=>{
   //response.write('this is a response for a request!');
   response.writeHead(200,{'Content-Type':'text/html'});
   //const ipAddress = request.socket.remoteAddress;
//    response.write(`Your IP address is ${ipAddress}`);
//    response.write(`response url ${request.url}`);
//    response.write(`Detail request's url: ${require('url').parse(request.url,true)}`);
    var q = url.parse(request.url,true).query;
    var txt = q.name + " " + q.email;
    response.write(txt);
    response.end();
}).listen(port);

console.log(`server is running port:${port}.`);