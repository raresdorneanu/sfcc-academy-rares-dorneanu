"use strict";

var server = require("server");

server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var CartModel = require("*/cartridge/models/cart");
    var viewData = res.getViewData();
    var BasketMgr = require("dw/order/BasketMgr");

    var currentBasket = BasketMgr.getCurrentBasket();
    var basketModel = new CartModel(currentBasket);
    res.render("cart/cart", basketModel);

    return next();
});

module.exports = server.exports();

// "use strict";

// var server = require("server");

// server.extend(module.superModule);

// server.append("Show", function(req, res, next) {
//     var viewData = res.getViewData();
//     // var BasketMgr = require("dw/order/BasketMgr");
//     var str = "hello";
//     // var currentBasket = BasketMgr.getCurrentBasket();
//     // var basketModel = new CartModel(currentBasket);
//     res.setViewData(str);
//     res.render("cart/cart", { str: str });

//     return next();
// });

// module.exports = server.exports();
