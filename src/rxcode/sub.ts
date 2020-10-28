import { defer, Observable, of, Subject, ConnectableObservable } from "rxjs";
import { multicast, refCount } from "rxjs/operators";


export const rxTest = () => {
  const source = defer(() =>
    of(Math.floor(Math.random() * 100))
  );

  const m = source.pipe(multicast(new Subject<number>()), refCount()) as ConnectableObservable<number>;
  m.subscribe(observer("a"));
  m.subscribe(observer("b"));
  // m.connect();
}



function observer(name: string) {
  return {
    next: (value: number) => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}