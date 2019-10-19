namespace Tools {

    export class Tool {

        sharpness: number;

        constructor (sharpness: number) {
            this.sharpness = sharpness;
        }

        getSharpness = () => this.sharpness;
    }

}