namespace Geometries {


    export class Shape {

        private form: string;
        private game: string;

        constructor (form: string) {
            this.form = form;
            this.game = 'On';
        }

        getForm = (): string => this.form;

        getGame = (): string => this.game;

        goAndDoSomething (action: string) {console.log(action)};
    }
}