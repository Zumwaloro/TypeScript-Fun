namespace TimeMeasurementUnits {


    export class TimeUnit {
        public length: number;

        constructor (length: number) {
            this.length = length;
        }

        startComing () {
            function signalIntention () {
                let stop = false;
                while(!stop) {
                    console.log('I am coming!');
                }
            }
            setInterval(() => {
                signalIntention();
            }, 10000);
        }
    }
}