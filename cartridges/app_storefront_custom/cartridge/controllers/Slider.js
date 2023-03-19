"use strict";

var server = require("server");
var ProductMgr = require("dw/catalog/ProductMgr");

server.get("Show", function(req, res, next) {
    var content = require("dw/campaign/SlotContent");

    res.render("slider");
    return next();
});

module.exports = server.exports();
