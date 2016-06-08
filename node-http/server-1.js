var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
    console.log('Request for ' + req.url + ' by method ' + req.method);
    if (req.method == 'GET') {

    }

})
server.listen(port, hostname, function() {
    console.log(`Server running at http://${hostname}:${port}/`);
});
