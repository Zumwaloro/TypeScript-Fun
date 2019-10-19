"use strict";
var TimeMeasurementUnits;
(function (TimeMeasurementUnits) {
    var TimeUnit = /** @class */ (function () {
        function TimeUnit(length) {
            this.length = length;
        }
        TimeUnit.prototype.startComing = function () {
            function signalIntention() {
                var stop = false;
                while (!stop) {
                    console.log('I am coming!');
                }
            }
            setInterval(function () {
                signalIntention();
            }, 10000);
        };
        return TimeUnit;
    }());
    TimeMeasurementUnits.TimeUnit = TimeUnit;
})(TimeMeasurementUnits || (TimeMeasurementUnits = {}));
