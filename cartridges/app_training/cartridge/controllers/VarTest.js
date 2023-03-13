"use strict";

var server = require("server");

server.get("Test", function(req, res, next) {
    var myvariable = "Var Test";
    var myvariable2 = "Var Test2";
    var myvariable3 = "Var Test3";
    var integer = 1;
    res.render("training/vartest", {
        title: myvariable,
        title2: myvariable2,
        title3: myvariable3,
        increment: integer
    });
    return next();
});

module.exports = server.exports();
