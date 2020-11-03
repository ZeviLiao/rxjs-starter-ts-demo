import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
(global as any).WebSocket = require('ws');


export const rxTest = () => {
  // const ws = webSocket('wss://echo.websocket.org');
  const socket$ = new WebSocketSubject('ws://localhost:3000');
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

