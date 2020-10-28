import { concat, defer, Observable, of, ConnectableObservable } from "rxjs";
import { delay, publish } from "rxjs/operators";


export const rxTest = () => {
  const source = concat(
    defer(() => of(random())),
    defer(() => of(random())).pipe(delay(1))
  );

  const p = source.pipe(publish()) as ConnectableObservable<number>;
  p.subscribe(observer("a"));
  p.connect();
  p.subscribe(observer("b"));
  setTimeout(() => p.subscribe(observer("c")), 10);
}

function random() {
  return Math.floor(Math.random() * 100);
}

function observer(name: string) {
  return {
    next: (value: number) => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}