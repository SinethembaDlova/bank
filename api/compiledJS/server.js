"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    Server.prototype.config = function () {
        var mongoURL = "mongodb://localhost/accounts";
        mongoose.connect(mongoURL);
        console.log("Successfully connected to database.");
        this.app.use(express.static('public'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(session({
            secret: 'keyboard cat',
            cookie: {
                maxAge: 6000 * 30
            }
        }));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            if (req.method === "OPTIONS") {
                res.header("Access-Control-Allow-Methods", "PUT,POST,DELETE");
                return res.status(200).json({});
            }
            next();
        });
        var port = 3000;
        this.app.listen(port, function () { return console.log("Server running on  https://localhost:" + port + '/'); });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map