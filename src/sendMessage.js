import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

 
socket.on("chatMessage", (msg) => {
  console.log("Received:", msg);
});

 
socket.on("connect", () => {
  console.log("Connected as", socket.id);
  socket.emit("chatMessage", { user: "chainx1", text: "Linking on Ledger 1" });
});
