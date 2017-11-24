"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Throttler = /** @class */ (function () {
    function Throttler(waitInterval) {
        this.waitInterval = waitInterval;
    }
    Throttler.prototype.throttle = function (callback) {
        clearTimeout(this.timer);
        // cast to any required because of the node types usage
        // we should remove node types
        this.timer = setTimeout(callback, this.waitInterval);
    };
    return Throttler;
}());
exports.default = Throttler;
