"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Throttler = /** @class */ (function () {
    function Throttler(waitInterval) {
        this.waitInterval = waitInterval;
        this.timer = 0;
    }
    Throttler.prototype.throttle = function (callback) {
        clearTimeout(this.timer);
        this.timer = setTimeout(callback, this.waitInterval);
    };
    return Throttler;
}());
exports.default = Throttler;
