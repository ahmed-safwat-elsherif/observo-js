import { Subscriber } from "../subscriber";
export declare type SubscribtionCallBackFun<T> = (subscriber: Subscriber<T>) => void;
export declare type SubscribeSuccessCallBackFun<T> = (response: T) => void;
export declare type SubscribeErrorCallBackFun = (error: string | Error) => void;
export declare type SubscribeCompleteCallBackFun = () => void;
//# sourceMappingURL=subscription-callbacks.model.d.ts.map