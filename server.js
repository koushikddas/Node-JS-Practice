var http = require('http');

function process_request(req, res){
var body = '<h1 style="color:orange">Thanks for calling!</h1>\n';
var content_length =body.length;
res.writeHead(200,{
    'Content-Length':content_length,
    'Content-Type': 'text/html',
});
res.end(body);
}
 var ser = http.createServer(process_request);
 ser.listen(8080);