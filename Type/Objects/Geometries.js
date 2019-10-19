"use strict";
var Geometries;
(function (Geometries) {
    var Shape = /** @class */ (function () {
        function Shape(form) {
            var _this = this;
            this.getForm = function () { return _this.form; };
            this.getGame = function () { return _this.game; };
            this.form = form;
            this.game = 'On';
        }
        Shape.prototype.goAndDoSomething = function (action) { console.log(action); };
        ;
        return Shape;
    }());
    Geometries.Shape = Shape;
})(Geometries || (Geometries = {}));
