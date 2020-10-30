import { Subject, concat, defer, Observable, of, ConnectableObservable, timer, Observer, from } from "rxjs";
import { delay, publish, switchMapTo, publishBehavior, publishLast, share } from "rxjs/operators";


export const rxTest = () => {

  let or = (v: any) => console.log(v)     // observer
  // observer complete object
  // let or = {  
  //   next: (v: any) => console.log(v),
  //   err: (err: any) => console.log(err),
  //   complete: () => { }
  // }


  // observable -- data source as pub
  let ob = from(['o1', 'o2'])
  // let ob = of('o1', 'o2')

  // let sbr = (or: any) => {  // one by one data source
  //   or.next('or1')
  //   or.next('or2')
  // }
  // let ob = new Observable(sbr) 

  ob.subscribe(or) // observable be subscribed by observer  -- execute (binding)

  // Subject
  let sj = new Subject<string>() // subject

  let orA = (v: any) => console.log('a', v) // observer favor topic
  let orB = (v: any) => console.log('b', v)

  // sj.subscribe(or) // sub
  sj.subscribe(orA) // topic A
  sj.subscribe(orB) // topic B

  // let ob2 = from(['s1', 's2']) // array pub and data source
  let ob2 = of('s1', 's2') // iterator pub and data source

  ob2.subscribe(sj) // observable be subscribed by subject-(topics)  -- execute (binding)

  // sj.subscribe(or)
  // sj.subscribe(or)
  // sj.next('s1')  // one by one data source
  // sj.next('s2')

}

