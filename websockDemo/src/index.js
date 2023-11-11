import { WebSocketServer } from "ws";
const wss = new WebSocketServer({
  port: 8080,
});
const list = new Set();
wss.on("connection", (currentWs) => {
  currentWs.on("error", console.error);
  list.add(currentWs);
  currentWs.on("message", (data) => {
    console.log("received: %s", data);
    list.forEach((ws) => {
      if (ws !== currentWs) {
        console.log();
        ws.send(data.toString());
      }
    });
  });
});
