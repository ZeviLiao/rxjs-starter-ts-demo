import { concat, defer, Observable, of, ConnectableObservable, timer, Observer } from "rxjs";
import { delay, publish, switchMapTo, publishBehavior, publishLast, share } from "rxjs/operators";


export const rxTest = () => {

  let s = new Observable((observer: Observer<number>) => {
    observer.next(1)
    observer.next(2)
  })

  // let observer = {
  //   next(val:any) {
  //     console.log(val)
  //   },
  //   err() {
  //   },
  //   complete() {
  //   }
  // }

  // s.subscribe(observer)
  s.subscribe((val: any) => {
    console.log(val)
  })

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