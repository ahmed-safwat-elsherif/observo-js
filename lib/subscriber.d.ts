import { SubscribeCompleteCallBackFun, SubscribeErrorCallBackFun, SubscribeSuccessCallBackFun } from "./@types/subscription-callbacks.model";
export declare class Subscriber<T> {
    successStackFuns: SubscribeSuccessCallBackFun<T>;
    errorStackFuns: SubscribeErrorCallBackFun;
    completeStackFuns: SubscribeCompleteCallBackFun;
    next(value: T): void;
    error(errValue: string | Error): void;
    complete(): void;
}
//# sourceMappingURL=subscriber.d.ts.map