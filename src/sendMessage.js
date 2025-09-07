import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

// Listen to messages from server
socket.on("chatMessage", (msg) => {
  console.log("Received:", msg);
});

// Send a message after connecting
socket.on("connect", () => {
  console.log("Connected as", socket.id);
  socket.emit("chatMessage", { user: "Bob", text: "Hello from Node.js!" });
});
