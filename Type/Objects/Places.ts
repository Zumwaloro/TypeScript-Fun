/// <reference path="People.ts" />
/// <reference path="Tools.ts" />

namespace Places {

    export class World {
        rollSomeone(someone: People.Person) {
            console.log("Currently rolling: " + someone.getName());
        }
    }

    export class Ground {}

    export class Shed {
        tools: Tools.Tool[];

        constructor () {
            this.tools = [new Tools.Tool(5), new Tools.Tool(4), new Tools.Tool(6)];
        }

        checkIfToolIsSharpest (sharpness: number): boolean {
            let isSharpest = true;
            for (let i = 0; i < this.tools.length; i++) {
                if (sharpness < this.tools[i].getSharpness()) {
                    isSharpest = false;
                }
            }
            return isSharpest;
        }
    }

    export class BackStreet {
        public isBadPlaceToGo: boolean;
        private peopleWhoWasHere: People.Person[];

        constructor () {
            this.isBadPlaceToGo = false;
            this.peopleWhoWasHere = [];
        }

        isItWrongToTakeThisStreet = ():boolean => this.isBadPlaceToGo;

        addVisitor(visitor: People.Person) {
            this.peopleWhoWasHere.push(visitor);
        }
    }


}