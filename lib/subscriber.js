"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const noop = () => { };
class Subscriber {
    next(value) {
        this.successStackFuns(value);
    }
    error(errValue) {
        this.errorStackFuns(errValue);
        this.successStackFuns = noop;
    }
    complete() {
        this.completeStackFuns();
        this.successStackFuns = noop;
        this.errorStackFuns = noop;
        this.completeStackFuns = noop;
    }
}
exports.Subscriber = Subscriber;
//# sourceMappingURL=subscriber.js.map