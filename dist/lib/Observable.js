"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
const subscriber_1 = require("./subscriber");
class Observable {
    constructor(subcallBackFun) {
        this.subcallBackFun = subcallBackFun;
    }
    subscribe(successFun, errorFun, completeFun) {
        const subscriber = new subscriber_1.Subscriber();
        if (successFun) {
            subscriber.successStackFuns = successFun;
        }
        if (errorFun) {
            subscriber.errorStackFuns = errorFun;
        }
        if (completeFun) {
            subscriber.completeStackFuns = completeFun;
        }
        this.subcallBackFun(subscriber);
    }
}
exports.Observable = Observable;
//# sourceMappingURL=observable.js.map