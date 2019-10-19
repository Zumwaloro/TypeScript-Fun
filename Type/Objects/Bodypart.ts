///<reference path='Geometries.ts' />

namespace Bodypart {

    export class Finger {

        public type: string;

        constructor (type: string) {
            this.type = type;
        }

        getFinger = (): string => this.type;
    }

    export class Brain {
        private intelligence: number;

        constructor (intelligence: number) {
            this.intelligence = intelligence;
        }

        getSmarter () {
            for (let i = 0; i < 50; i++) {
                this.intelligence++;
            }
        }
    }

    export class Head {
        private dumbness: number;

        constructor (dumbness: number) {
            this.dumbness = dumbness;
        }

        getDumber () {
            for (let i = 0; i < 50; i++) {
                this.dumbness--;
            }
        }
    }

    export class Forehead {

        constructor () {}

        touchingOtherBodypartsWithIt (listOfFingers: Bodypart.Finger[], shapeOfArrangement?: Geometries.Shape) {
            let shape ="";
            if (shapeOfArrangement) {shape = " in " + shapeOfArrangement.getForm() + " shape"}
            alert("The following bodyparts are arranged" + shape + ":");
            for (let i =0; i<listOfFingers.length; i++) {console.log(listOfFingers[i].getFinger())}
        }
    }


}