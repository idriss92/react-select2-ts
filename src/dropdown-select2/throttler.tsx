export default class Throttler {
    waitInterval: number;
    timer: number;

    constructor(waitInterval: number) {
        this.waitInterval = waitInterval;
    }

    throttle(callback: () => void) {
        clearTimeout(this.timer);
        this.timer = setTimeout(callback, this.waitInterval) as any;
    }
}