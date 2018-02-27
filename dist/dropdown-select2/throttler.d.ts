export default class Throttler {
    waitInterval: number;
    timer: number;
    constructor(waitInterval: number);
    throttle(callback: () => void): void;
}
