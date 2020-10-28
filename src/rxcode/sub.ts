import { defer, Observable, of, Subject } from "rxjs";


export const rxTest = () => {
  const source = defer(() => of(Math.floor(Math.random() * 100)));

  const subject = new Subject<number>();
  subject.subscribe(observer("a"));
  subject.subscribe(observer("b"));
  source.subscribe(subject);
}



function observer(name: string) {
  return {
    next: (value: number) => console.log(`observer ${name}: ${value}`),
    complete: () => console.log(`observer ${name}: complete`)
  };
}