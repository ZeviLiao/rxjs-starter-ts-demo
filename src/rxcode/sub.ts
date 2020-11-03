import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
(global as any).WebSocket = require('ws');


export const rxTest = () => {
  const ws = webSocket('wss://echo.websocket.org');

  ws.subscribe(res => {
    console.log('message', res);
  });

  ws.next(`content`);
  ws.next(`content`);
  ws.next(`content`);

  ws.complete();

}

