import { Subscriber } from "../lib/subscriber";

export type SubscribtionCallBackFun<T> = (subscriber: Subscriber<T>) => void;
export type SubscribeSuccessCallBackFun<T> = (response: T) => void;
export type SubscribeErrorCallBackFun = (error: string | Error) => void;
export type SubscribeCompleteCallBackFun = () => void;
