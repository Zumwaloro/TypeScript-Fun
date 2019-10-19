"use strict";
///<reference path='Geometries.ts' />
var Bodypart;
(function (Bodypart) {
    var Finger = /** @class */ (function () {
        function Finger(type) {
            var _this = this;
            this.getFinger = function () { return _this.type; };
            this.type = type;
        }
        return Finger;
    }());
    Bodypart.Finger = Finger;
    var Brain = /** @class */ (function () {
        function Brain(intelligence) {
            this.intelligence = intelligence;
        }
        Brain.prototype.getSmarter = function () {
            for (var i = 0; i < 50; i++) {
                this.intelligence++;
            }
        };
        return Brain;
    }());
    Bodypart.Brain = Brain;
    var Head = /** @class */ (function () {
        function Head(dumbness) {
            this.dumbness = dumbness;
        }
        Head.prototype.getDumber = function () {
            for (var i = 0; i < 50; i++) {
                this.dumbness--;
            }
        };
        return Head;
    }());
    Bodypart.Head = Head;
    var Forehead = /** @class */ (function () {
        function Forehead() {
        }
        Forehead.prototype.touchingOtherBodypartsWithIt = function (listOfFingers, shapeOfArrangement) {
            var shape = "";
            if (shapeOfArrangement) {
                shape = " in " + shapeOfArrangement.getForm() + " shape";
            }
            alert("The following bodyparts are arranged" + shape + ":");
            for (var i = 0; i < listOfFingers.length; i++) {
                console.log(listOfFingers[i].getFinger());
            }
        };
        return Forehead;
    }());
    Bodypart.Forehead = Forehead;
})(Bodypart || (Bodypart = {}));
