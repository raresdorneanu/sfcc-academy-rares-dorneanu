"use strict";

var server = require("server");

server.get("RenderTemplate", function(req, res, next) {
    res.render("training/dummy");
    next();
});

server.get("TestRemoteInclude", function(req, res, next) {
    res.render("training/remote-include");
    next();
});

server.get("TestDecorator", function(req, res, next) {
    res.render("training/decorator");
    next();
});

module.exports = server.exports();
