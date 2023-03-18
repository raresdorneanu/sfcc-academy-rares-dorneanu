"use strict";

var server = require("server");

server.get("Show", function(req, res, next) {
    var content = require("dw/content/ContentMgr");
    var asset1 = content.getContent("data_configured_inside_content_asset");
    var asset2 = content.getContent("carousel_image_1");
    var asset3 = content.getContent("carousel_image_2");
    var asset4 = content.getContent("carousel_image_3");
    var asset5 = content.getContent("carousel_image_4");
    var url1 = asset1.custom.desktop_banner_image.url;
    var url2 = asset2.custom.desktop_banner_image.url;
    var url3 = asset3.custom.desktop_banner_image.url;
    var url4 = asset4.custom.desktop_banner_image.url;
    var url5 = asset5.custom.desktop_banner_image.url;

    res.render("slick", { src1: url1, src2: url2, src3: url3, src4: url4, src5: url5 });
    return next();
});

module.exports = server.exports();
