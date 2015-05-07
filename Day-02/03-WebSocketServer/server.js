var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(connection){
    console.log("a new connection is established");
    setInterval(function(){
        connection.sendText(new Date().toString());
    },3000);
});
server.listen(9090);
console.log("socket server listening on port 9090");
