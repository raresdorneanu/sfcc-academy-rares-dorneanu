window.jQuery = window.$ = require("jquery");
var processInclude = require("./util");

$(document).ready(function() {
    processInclude(require("../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./components/test"));
    processInclude(require("../../../slick-1.8.1/slick/slick"));
    processInclude(require("./components/slider"));
});
