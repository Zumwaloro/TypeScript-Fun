"use strict";
///<reference path='Bodypart.ts' />
///<reference path='Geometries.ts' />
var People;
(function (People) {
    var Person = /** @class */ (function () {
        function Person(name, sharpness) {
            var _this = this;
            this.getName = function () { return _this.name; };
            this.getSharpness = function () { return _this.sharpness; };
            this.run = function () {
                return 'I am so sporty!';
            };
            this.haveYouBeenToAGoodPalce = function (place) {
                if (!place.isItWrongToTakeThisStreet()) {
                    alert('You know it!');
                }
                else {
                    alert('You know nothing John Snow!');
                }
            };
            this.willYouShine = function () {
                return _this.glow ? true : false;
            };
            this.doYouGlitter = function () {
                return _this.glitter ? true : false;
            };
            this.name = name;
            this.sharpness = sharpness;
            this.memory = [];
            this.toDoList = [];
            this.toSeeList = [];
            this.glow = true;
            this.glitter = true;
        }
        Person.prototype.addItemToDo = function (item) {
            this.toDoList.push(item);
        };
        Person.prototype.addItemToSee = function (item) {
            this.toSeeList.push(item);
        };
        Person.prototype.showShapeWithFingers = function (shape, fingerOne, fingerTwo, randomFingers) {
            if (!randomFingers) {
                alert("Using fingers " + fingerOne.getFinger() + " and " + fingerTwo.getFinger() + " to shape a(n) " + shape.getForm());
            }
            else {
                console.log("Used fingers to do the " + shape.getForm() + "shape are: ");
                for (var i = 0; i < randomFingers.length; i++) {
                    console.log(randomFingers[i].getFinger());
                }
            }
        };
        Person.prototype.lookInACertainWay = function (typeOfLook, additionalAction) {
            console.log("Looking " + typeOfLook);
            if (additionalAction) {
                additionalAction();
            }
        };
        Person.prototype.talkToSomeOneOrDeliverAction = function (audience, messageOrAction) {
            audience.listenAndMemorize(messageOrAction);
        };
        Person.prototype.listenAndMemorize = function (messageOrAction) {
            this.memory.push(messageOrAction);
        };
        Person.prototype.repeatAction = function (numberOfRepetitions, action) {
            for (var i = 0; i < numberOfRepetitions; i++) {
                action();
            }
        };
        Person.prototype.doAction = function (action) {
            action();
        };
        Person.prototype.hitTheGround = function (ground) {
            alert('Ouch!');
        };
        Person.prototype.live = function (reasonToLive) {
            if (reasonToLive === 'Fun') {
                return true;
            }
            return false;
        };
        return Person;
    }());
    People.Person = Person;
})(People || (People = {}));
