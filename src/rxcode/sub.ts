import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
(global as any).WebSocket = require('ws');


export const rxTest = () => {
  // const socket$ = webSocket('wss://echo.websocket.org');
  // const socket$ = webSocket('ws://localhost:3000');
  const socket$ = new WebSocketSubject({
    url: 'ws://localhost:3000',
    deserializer: ({ data }) => data
  });

  socket$.subscribe(
    (data) => console.log(data),
    (err) => console.error(err),
    () => console.warn('Completed!')
  );
  socket$.next({
    event: 'events',
    data: 'test',
  });
  // socket$.unsubscribe();
  socket$.complete()
}

