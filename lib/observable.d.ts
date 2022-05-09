import { SubscribeCompleteCallBackFun, SubscribeErrorCallBackFun, SubscribeSuccessCallBackFun, SubscribtionCallBackFun } from "./@types/subscription-callbacks.model";
export declare class Observable<T> {
    private subcallBackFun;
    constructor(subcallBackFun: SubscribtionCallBackFun<T>);
    subscribe(successFun?: SubscribeSuccessCallBackFun<T>, errorFun?: SubscribeErrorCallBackFun, completeFun?: SubscribeCompleteCallBackFun): void;
}
//# sourceMappingURL=observable.d.ts.map