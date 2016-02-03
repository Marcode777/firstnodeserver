
var http = require('http');
var GOODPORT = 7000;
var BADPORT = 7500;

//starting good server
var goodServer = http.createServer(function(req, res){
    res.end("Great job your server is running on " + GOODPORT);
});

goodServer.listen(GOODPORT, function(){
    console.log("server is listening at http://localhost:%s", GOODPORT);
})

//starting bad server
var badServer = http.createServer(function(req, res){
    res.end("Your server's non performant bro " + GOODPORT);
});

badServer.listen(BADPORT, function(){
    console.log("server is listening at http://localhost:%s", BADPORT);
})

// since a server can only run on one port, you have to create another server to run on another port