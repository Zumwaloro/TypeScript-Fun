"use strict";
// Importing the necessary namespaces:
/// <reference path="./Objects/People.ts" />
/// <reference path="./Objects/Places.ts" />
/// <reference path="./Objects/Bodypart.ts" />
/// <reference path="./Objects/Geometries.ts" />
/// <reference path="./Objects/Time.ts" />
/// <reference path="./Objects/LegalRegulations.ts" />
//Declaring some variables:
var somebody = new People.Person("somebody", 10);
var me = new People.Person("me", 1);
var she = new People.Person("she", 8);
var you = new People.Person("you", 10);
var others = new People.Person("others", 10);
var all = new People.Person("all", 7);
var world = new Places.World();
var shed = new Places.Shed();
var index = new Bodypart.Finger("index");
var thumb = new Bodypart.Finger("thumb");
var brain = new Bodypart.Brain(90);
var head = new Bodypart.Head(90);
var forehead = new Bodypart.Forehead();
var shape = new Geometries.Shape("L");
var allStar = new Geometries.Shape("All Star");
var rockStar = new Geometries.Shape("Rock Star");
var shootingStar = new Geometries.Shape("Shooting Star");
var year = new TimeMeasurementUnits.TimeUnit(365);
var rule1 = new LegalRegulations.Rule("All Men are created equal.");
var rule2 = new LegalRegulations.Rule("They are endowed by their creator with certain unalienable rights.");
var rules = [rule1, rule2];
var ground = new Places.Ground();
var backStreet = new Places.BackStreet();
//And here we go...
somebody.repeatAction(1, somebody.talkToSomeOneOrDeliverAction(me, world.rollSomeone(me)));
shed.checkIfToolIsSharpest(me.getSharpness());
she.lookInACertainWay("kind of dumb", she.talkToSomeOneOrDeliverAction(me, "You are a looser!"));
forehead.touchingOtherBodypartsWithIt([index, thumb], shape);
alert('Well');
year.startComing();
others.doAction(function () {
    for (var i = 0; i < rules.length; i++) {
        LegalRegulations.Rule.eatSomeone(me);
    }
});
me.doAction(function () {
    do {
        me.hitTheGround(ground);
    } while (me.run());
});
var lifeMakesSense = me.live('Not for fun');
brain.getSmarter();
head.getDumber();
for (var i = 0; i < 100000; i++) {
    me.addItemToDo("To do number " + i);
    me.addItemToSee("To see number " + i);
}
backStreet.isItWrongToTakeThisStreet() ? 'Turn back' : 'Nothing wrong with it';
you.haveYouBeenToAGoodPalce(backStreet);
var willYouEverShine = you.willYouShine();
alert('Hey ' + new Date() + ", you're an " + allStar.getForm());
allStar.getGame();
allStar.goAndDoSomething('Play!');
alert('Hey ' + new Date() + ", you're a " + rockStar.getForm());
rockStar.goAndDoSomething("Get the show on, and get your payemnt afterwards!");
(function isItGold() {
    all.doYouGlitter() ? 'You are gold.' : 'You are a monkey with anxiety.';
})();
(function breakTheMold() {
    if (shootingStar.getForm() === 'Shooting Star') {
        shootingStar.goAndDoSomething('Breaking the mold!');
    }
    else {
        alert('You are not allowed to break the mold. Get in right shape!');
    }
})();
