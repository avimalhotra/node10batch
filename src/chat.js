//import { Server } from "socket.io";
//const Server=require("socket.io")


//const io = new Server(3000);

const io = require('socket.io')();
io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});