import { Subject, concat, defer, Observable, of, ConnectableObservable, timer, Observer } from "rxjs";
import { delay, publish, switchMapTo, publishBehavior, publishLast, share } from "rxjs/operators";


export const rxTest = () => {

  let or = (v: any) => console.log(v)
  // let or = {
  //   next: (v: any) => console.log(v),
  //   err: (err: any) => console.log(err),
  //   complete: () => { }
  // }

  let sbr = (or: any) => {  // data source
    or.next('or1')
    or.next('or2')
  }
  let ob = new Observable(sbr) // pub
  ob.subscribe(or) // sub

  //
  let sj = new Subject<string>() // subject

  sj.subscribe(or)
  // sj.subscribe(or)
  // sj.subscribe(or)
  sj.next('s1')
  sj.next('s2')

}

