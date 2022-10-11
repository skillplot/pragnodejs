const WebSocket = require('ws')

const url = 'ws://localhost:8000'
const socket = new WebSocket(url)
// socket.onopen = (ws) => {
//   ws.send('Message From Client') 
// }
socket.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}
socket.onmessage = (e) => {
  // console.log(e.data)
  console.log(`${e.data}`);
}

// socket.on('open', function open(data) {
//   socket.on('message', function message(data) {
//     console.log(`${data}`);
//   });
// });
