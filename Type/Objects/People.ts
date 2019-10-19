///<reference path='Bodypart.ts' />
///<reference path='Geometries.ts' />

namespace People {

    export class Person {

        public name: string;
        public sharpness: number;
        private memory: any[];
        private toDoList: any[];
        private toSeeList: any[];
        public glow: boolean;
        public glitter: boolean;
    
        constructor (name: string, sharpness: number) {
            this.name = name;
            this.sharpness = sharpness;
            this.memory = [];
            this.toDoList = [];
            this.toSeeList = [];
            this.glow = true;
            this.glitter = true;
        }

        getName = (): string => this.name;
    
        getSharpness = (): number => this.sharpness;

        addItemToDo (item: any) {
            this.toDoList.push(item);
        }

        addItemToSee (item: any) {
            this.toSeeList.push(item);
        }

        showShapeWithFingers(shape: Geometries.Shape, fingerOne: Bodypart.Finger, fingerTwo: Bodypart.Finger, randomFingers?: Bodypart.Finger[]) {
            if (!randomFingers) {
                alert("Using fingers " + fingerOne.getFinger() + " and " + fingerTwo.getFinger() + " to shape a(n) " + shape.getForm());
            } else {
                console.log("Used fingers to do the " + shape.getForm() + "shape are: ");
                for (let i = 0; i<randomFingers.length; i++) {
                    console.log(randomFingers[i].getFinger());
                }
            }
        }        

        lookInACertainWay (typeOfLook: string, additionalAction?: any) {
            console.log("Looking " + typeOfLook);
            if(additionalAction) {
                additionalAction();
            }
        }
    
        talkToSomeOneOrDeliverAction (audience: Person, messageOrAction: any) {
            audience.listenAndMemorize(messageOrAction);            
        }
    
        listenAndMemorize(messageOrAction: any) {
            this.memory.push(messageOrAction);
        }
    
        repeatAction (numberOfRepetitions: number, action: any) {
            for (let i = 0; i < numberOfRepetitions; i++) {
                action();
            }
        }

        doAction (action: Function) {
            action();
        }

        hitTheGround (ground: Places.Ground) {
            alert('Ouch!');
        }

        run  = (): string => {
            return 'I am so sporty!';
        }

        live (reasonToLive: string) {
            if(reasonToLive === 'Fun') {
                return true;
            }
            return false;
        }

        haveYouBeenToAGoodPalce = (place: Places.BackStreet) => {
            if(!place.isItWrongToTakeThisStreet()) {
                alert('You know it!');
            } else {
                alert('You know nothing John Snow!');
            }
        }

        willYouShine = (): boolean => {
           return this.glow?true:false;
        }

        doYouGlitter = (): boolean => {
            return this.glitter?true:false;
        }
    
    }

}
