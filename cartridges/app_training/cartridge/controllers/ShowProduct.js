// "use strict";

// var server = require("server");

// server.get("ShowProductTest", function(req, res, next) {
//     var ProductMgr = require("dw/catalog/ProductMgr");
//     var pid = req.querystring.pid;
//     var product = ProductMgr.getProduct(pid);

//     res.render("training/productfound", { product: product });

//     return next();
// });

// module.exports = server.exports();

"use strict";

var server = require("server");

server.get("ShowProductTest", function(req, res, next) {
    var ProductMgr = require("dw/catalog/ProductMgr");
    var pid = req.querystring.pid;

    res.render("training/productfound", { productId: pid });

    return next();
});

module.exports = server.exports();

// "use strict";

// var server = require("server");
// var ProductMgr = require("dw/catalog/ProductMgr");
// server.get("ShowProductTest", function(req, res, next) {
//     var viewData = res.getViewData();
//     var params = viewData.queryString;
//     var param = params.split("=");
//     // var productId = res.querystring.id;
//     var productId = param[1];
//     res.setViewData(productId);
//     res.render("training/productfound", { product: productId });

//     return next();
// });

// module.exports = server.exports();
