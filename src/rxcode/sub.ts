import { concat, defer, Observable, of, ConnectableObservable, timer } from "rxjs";
import { delay, publish, switchMapTo, publishBehavior, publishLast , share} from "rxjs/operators";


export const rxTest = () => {
  const source = concat(
    defer(() => of(random())),
    defer(() => of(random())).pipe(delay(1))
  );

  const s = source.pipe(share());
  s.subscribe(observer("a"));
  s.subscribe(observer("b"));
  setTimeout(() => s.subscribe(observer("c")), 10);
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