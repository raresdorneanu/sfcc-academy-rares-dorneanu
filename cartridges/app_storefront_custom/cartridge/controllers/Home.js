"use strict";

var server = require("server");
server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var Site = require("dw/system/Site");
    var viewData = res.getViewData();
    var action = viewData.action;
    viewData.homeAction = action;
    res.setViewData(viewData);
    return next();
});

module.exports = server.exports();
