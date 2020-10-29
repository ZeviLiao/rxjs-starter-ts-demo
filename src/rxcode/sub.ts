import { Subject, concat, defer, Observable, of, ConnectableObservable, timer, Observer } from "rxjs";
import { delay, publish, switchMapTo, publishBehavior, publishLast, share } from "rxjs/operators";


export const rxTest = () => {

  let s = new Subject<number>()

  s.subscribe({
    next: (v: any) => {
      console.log(v)
    }
  })

  // s.subscribe(observer)
  s.subscribe((val: any) => {
    console.log(val)
  })

  s.next(1)
  s.next(2)

}

// function random() {
//   return Math.floor(Math.random() * 100);
// }

// function observer(name: string) {
//   return {
//     next: (value: number) => console.log(`observer ${name}: ${value}`),
//     complete: () => console.log(`observer ${name}: complete`)
//   };
// }