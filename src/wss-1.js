const WebSocket = require('ws')

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const socket = new WebSocket.Server({ port: 8000 })

socket.on("close", function () {
  console.log("Client disconnected");
});

socket.onerror = function () {
  console.log("Some Error occurred");
}

socket.on("message", (data) => {
  console.log(`${data}`);
});

const clients = new Map();

socket.on('connection', function connection(ws) {
  console.log('Client connected');

  const id = uuidv4();
  const color = Math.floor(Math.random() * 360);
  const metadata = { id, color };

  clients.set(ws, metadata);


  const interval = setInterval(() => {
    ws.send(JSON.stringify(metadata));
  }, 1000)
});

