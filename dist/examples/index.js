"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const observable_1 = require("../lib/observable");
const observable$ = new observable_1.Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.complete();
    subscriber.error("Error");
});
observable$.subscribe((res1) => {
    console.log({ res1 });
}, (error) => {
    console.log({ error });
}, () => {
    console.log("\n---------- Completed (1) --------\n");
});
//
observable$.subscribe((res2) => {
    console.log({ res2 });
}, (error) => {
    console.log({ error });
}, () => {
    console.log("\n---------- Completed (2) --------\n");
});
observable$.subscribe((res3) => {
    console.log({ res3 });
}, (error) => {
    console.log({ error });
}, () => {
    console.log("\n---------- Completed (3) --------\n");
});
//# sourceMappingURL=index.js.map