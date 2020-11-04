import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
(global as any).WebSocket = require('ws');


export const rxTest = () => {
  // const socket$ = webSocket('wss://echo.websocket.org');
  const subject = webSocket('ws://localhost:3000');
  // const subject = new WebSocketSubject({
  //   url: 'ws://localhost:3000'
  //   // deserializer: ({ data }) => {
  //   //   // console.log(data)
  //   //   return data
  //   // }
  //   // deserializer: ({ data }) => JSON.parse(data) // auto do this. 
  // });

  const observableA = subject.multiplex(
    () => ({ subscribe: 'A' }), // When server gets this message, it will start sending messages for 'A'...
    () => ({ unsubscribe: 'A' }), // ...and when gets this one, it will stop.
    (message: any) => {
      return message.tag === 'A'
    } // If the function returns `true` message is passed down the stream. Skipped if the function returns false.
  );

  const observableB = subject.multiplex( // And the same goes for 'B'.
    () => ({ subscribe: 'B' }),
    () => ({ unsubscribe: 'B' }),
    (message: any) => {
      return message.tag === 'B'
    }
  );

  const subA = observableA.subscribe(messageForA => console.log(messageForA));
  // At this moment WebSocket connection is established. Server gets '{"subscribe": "A"}' message and starts sending messages for 'A',
  // which we log here.

  const subB = observableB.subscribe(messageForB => console.log(messageForB));
  // Since we already have a connection, we just send '{"subscribe": "B"}' message to the server. It starts sending messages for 'B',
  // which we log here.

  subject.next({
    tag: 'A',
    data: 'abc1'
  })
  subject.next({
    tag: 'B',
    data: 'abc2'
  })

  function closeWebsocket() {
    // this also caused the websocket connection to be closed
    subB.unsubscribe();
    // Message '{"unsubscribe": "B"}' is sent to the server, which stops sending 'B' messages.

    subA.unsubscribe();
    // Message '{"unsubscribe": "A"}' makes the server stop sending messages for 'A'. Since there is no more subscribers to root Subject,
    // socket connection closes.
    // socket$.unsubscribe();
  }

  setTimeout(closeWebsocket, 3000)
}

