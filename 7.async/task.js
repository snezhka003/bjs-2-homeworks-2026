class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!(time ?? null) || !(callback ?? null)) {
        /* if (time === undefined || time === null || callback === undefined || callback === null) { */
            throw new Error ("Отсутствуют обязательные аргументы");
        } else if (this.alarmCollection.some(item => item.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
            this.alarmCollection.push({time, callback, canCall: true});
        } else {
            this.alarmCollection.push({time, callback, canCall: true});
        }
    };

    removeClock(time) {
        return this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
    };

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0,5);
    };

    start() {
        if (this.intervalId !== null && this.intervalId !== undefined) {
            return;
        } else {
            return this.intervalId = setInterval(() => {
                this.alarmCollection.forEach(item => {
                    if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
                        item.canCall = false;
                        item.callback();
                    }})
            }, 1000);
        }
    };

    stop() {
        if (this.intervalId !== null && this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    };

    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
}