import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import client from "prom-client";
import redis from "./redis.js";
import { register,connection,message_throughput,message_dropped } from "./metrics.js";


const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  connection.inc();

  socket.on("chatMessage", async (msg) => {
    try {
      message_throughput.inc();
      
      await redis.publish("chat_channel", JSON.stringify(msg));
      io.emit("chatMessage", msg);
    } catch (err) {
        message_dropped.inc();
      console.error("Message error:", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    connection.dec();
  });
});

httpServer.listen(5000, () => console.log("🚀 Chat server running on port 5000"));