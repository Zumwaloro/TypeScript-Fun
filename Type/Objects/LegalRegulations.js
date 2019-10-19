"use strict";
///<reference path="./People.ts" />
var LegalRegulations;
(function (LegalRegulations) {
    var Rule = /** @class */ (function () {
        function Rule(description) {
            this.description = description;
        }
        Rule.eatSomeone = function (victim) {
            this.peopleEaten.push(victim);
        };
        Rule.peopleEaten = [];
        return Rule;
    }());
    LegalRegulations.Rule = Rule;
})(LegalRegulations || (LegalRegulations = {}));
