"use strict";
/// <reference path="People.ts" />
/// <reference path="Tools.ts" />
var Places;
(function (Places) {
    var World = /** @class */ (function () {
        function World() {
        }
        World.prototype.rollSomeone = function (someone) {
            console.log("Currently rolling: " + someone.getName());
        };
        return World;
    }());
    Places.World = World;
    var Ground = /** @class */ (function () {
        function Ground() {
        }
        return Ground;
    }());
    Places.Ground = Ground;
    var Shed = /** @class */ (function () {
        function Shed() {
            this.tools = [new Tools.Tool(5), new Tools.Tool(4), new Tools.Tool(6)];
        }
        Shed.prototype.checkIfToolIsSharpest = function (sharpness) {
            var isSharpest = true;
            for (var i = 0; i < this.tools.length; i++) {
                if (sharpness < this.tools[i].getSharpness()) {
                    isSharpest = false;
                }
            }
            return isSharpest;
        };
        return Shed;
    }());
    Places.Shed = Shed;
    var BackStreet = /** @class */ (function () {
        function BackStreet() {
            var _this = this;
            this.isItWrongToTakeThisStreet = function () { return _this.isBadPlaceToGo; };
            this.isBadPlaceToGo = false;
            this.peopleWhoWasHere = [];
        }
        BackStreet.prototype.addVisitor = function (visitor) {
            this.peopleWhoWasHere.push(visitor);
        };
        return BackStreet;
    }());
    Places.BackStreet = BackStreet;
})(Places || (Places = {}));
