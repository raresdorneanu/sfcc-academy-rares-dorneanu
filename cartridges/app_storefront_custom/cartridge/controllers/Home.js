"use strict";

var server = require("server");

server.extend(module.superModule);

server.append("Show", function(req, res, next) {
    var contentID = "data_configured_inside_content_asset";
    var content = dw.content.ContentMgr.getContent(contentID);
    if (content) {
        var contentImage = content.custom.desktop_banner_image.url;
        res.render("contentAssetExercise", { contentImage: contentImage });
    } else {
        console.error("Content asset not found: " + contentID);
    }
    res.render("home/homePage");

    return next();
});

module.exports = server.exports();
