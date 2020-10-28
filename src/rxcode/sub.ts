import { defer, Observable, of, Subject, ConnectableObservable } from "rxjs";
import { multicast, refCount, delay } from "rxjs/operators";


export const rxTest = () => {
  // const source = defer(() =>
  //   of(Math.floor(Math.random() * 100))
  // );
  const source = defer(() => of(Math.floor(Math.random() * 100))
    .pipe(delay(0)));

  const m = source.pipe(
    multicast(() => new Subject<number>()),
    refCount()
  );
  m.subscribe(observer("a"));
  m.subscribe(observer("b"));
}



function observer(name: string) {
  return {
    next: (value: number) => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}