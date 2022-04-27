import {
  SubscribeCompleteCallBackFun,
  SubscribeErrorCallBackFun,
  SubscribeSuccessCallBackFun,
} from "../types/subscription-callbacks.model";

const noop = () => {};

export class Subscriber<T> {
  successStackFuns: SubscribeSuccessCallBackFun<T>;
  errorStackFuns: SubscribeErrorCallBackFun;
  completeStackFuns: SubscribeCompleteCallBackFun;

  next(value: T): void {
    this.successStackFuns(value);
  }

  error(errValue: string | Error): void {
    this.errorStackFuns(errValue);
    this.successStackFuns = noop;
  }

  complete(): void {
    this.completeStackFuns();
    this.successStackFuns = noop;
    this.errorStackFuns = noop;
    this.completeStackFuns = noop;
  }
}
