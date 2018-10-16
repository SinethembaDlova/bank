"use strict";
exports.__esModule = true;
var server_1 = require("./server");
var routes_1 = require("./routes/routes");
var server = new server_1.Server();
var routes = new routes_1.Routes();
server.app.get('/accounts', routes.getAccounts);
server.app.post('/accounts', routes.addAccount);
//# sourceMappingURL=index.js.map