"use strict";
var Tools;
(function (Tools) {
    var Tool = /** @class */ (function () {
        function Tool(sharpness) {
            var _this = this;
            this.getSharpness = function () { return _this.sharpness; };
            this.sharpness = sharpness;
        }
        return Tool;
    }());
    Tools.Tool = Tool;
})(Tools || (Tools = {}));
