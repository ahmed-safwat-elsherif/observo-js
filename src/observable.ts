import { Subscriber } from "./subscriber";
import {
  SubscribeCompleteCallBackFun,
  SubscribeErrorCallBackFun,
  SubscribeSuccessCallBackFun,
  SubscribtionCallBackFun,
} from "./@types/subscription-callbacks.model";

export class Observable<T> {
  constructor(private subcallBackFun: SubscribtionCallBackFun<T>) {}

  subscribe(
    successFun?: SubscribeSuccessCallBackFun<T>,
    errorFun?: SubscribeErrorCallBackFun,
    completeFun?: SubscribeCompleteCallBackFun
  ): void {
    const subscriber = new Subscriber<T>();

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
