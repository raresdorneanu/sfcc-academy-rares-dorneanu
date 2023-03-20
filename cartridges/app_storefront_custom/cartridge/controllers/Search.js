"use strict";

var server = require("server");

server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var viewData = res.getViewData();
    var CatalogMgr = require("dw/catalog/CatalogMgr");
    var category = CatalogMgr.getCategory(req.querystring.cgid);
    if (
        category &&
        category.custom.category_background_color &&
        category.custom.category_text_color &&
        category.custom.category_text_attr
    ) {
        var newBadge = {
            badgeBackgroundColor: category.custom.category_background_color,
            badgeTextColor: category.custom.category_text_color,
            badgeText: category.custom.category_text_attr
        };
    }
    viewData.newBadge = newBadge;
    viewData.categoryId = category.ID;
    res.setViewData(viewData);

    return next();
});

module.exports = server.exports();
