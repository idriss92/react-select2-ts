export default class Throttler {
    waitInterval: number;
    timer: number;

    constructor(waitInterval: number) {
        this.waitInterval = waitInterval;
    }

    throttle(callback: () => void) {
        clearTimeout(this.timer);

        // cast to any required because of the node types usage
        // we should remove node types
        this.timer = setTimeout(callback, this.waitInterval) as any;
    }
}