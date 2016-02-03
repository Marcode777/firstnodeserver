var http = require("http");

var PORT = 8080; //PORT is capitalized because it's not supposed to change. It's like saying, 'hey this is PORT 8080 do not change this'

function handleRequest(request, response) {
    response.end("It works!! Path Hit: " + request.url); // if you change this reponse, you need to restart the server or else the change won't show // this shows on the browser
}

var server = http.createServer(handleRequest); // this creates your server

server.listen(PORT, function() {
    console.log("Server is listening on: http://localhost:%s", PORT); //this tells you where your port is listening for events. %s is string interpolation, it's another wildcard saying whatever the value is, in this case PORT, should be printed as string // this shows on the console
});