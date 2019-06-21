var server = require("./route_server");
var router = require("./router");
 
server.start(router.route);