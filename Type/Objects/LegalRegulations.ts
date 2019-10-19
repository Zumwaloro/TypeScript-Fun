///<reference path="./People.ts" />

namespace LegalRegulations {

    export class Rule {
        public description: string;
        private static peopleEaten: People.Person[] = []

        constructor (description: string) {
            this.description = description;
        }

        public static eatSomeone (victim: People.Person) {
            this.peopleEaten.push(victim);
        }
    }
}