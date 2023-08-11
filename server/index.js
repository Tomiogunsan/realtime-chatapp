const http = require("http")
const app = require("./app")
const server = http.createServer(app);

// const { API_PORT } = process.env;
// const port = process.env.PORT || API_PORT;

app.get("/", (req, res) => {
  res.send("Hello world");
 });

// server listening
server.listen(4000, () => {
  console.log("Server running on port 4000")
})















// const express = require("express");
// const http = require("http");
// const cors = require("cors");
// const app = express();
// const { Server } = require("socket.io");
// const { MongoClient, Admin } = require("mongodb");
// const { generateLocationMessage } = require("./utils/message");
// const moment = require("moment");

// const client = new MongoClient(
//   "mongodb+srv://tomiafolayan:Eniolorunfe@cluster0.5ztnlcc.mongodb.net/?retryWrites=true&w=majority"
// );

// app.use(cors());
// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User connected ${socket.id}`);
//   socket.emit("newEmail");
//   socket.on("createMessage", (message) => {
//     console.log("first", message);
//   });

//   socket.on("join", async (data) => {
//     console.log(data);
//     const { displayName, group, id } = data;
//     try {
//       let result = await collection.findOne({ _id: group });

//       if (!result) {
//         await collection.insertOne({ _id: group, messages: [] });
//       }
//       socket.join(group);
//       let createdtime = Date.now();
//       console.log(createdtime);
//       io.to(group).emit("receiveMessage", {
//         message: `${displayName} has joined the chat room`,
//         from: "Admin",
//         createdtime,
//       });
//       socket.emit("receiveMessage", {
//         message: `Welcome ${displayName}`,
//         from: "Admin",
//         createdtime,
//       });
//       socket.activeRoom = group;
//       //    socket.to(group).emit("groupUsers", chatRoomUsers);
//       //    socket.emit("groupUsers", chatRoomUsers);
//     } catch (e) {
//       console.log(e);
//     }

//     socket.on("sendMessage", (message) => {
//       console.log(message);
//       collection.updateOne(
//         { _id: socket.activeRoom },
//         {
//           "$push": {
//             "messages": message,
//           },
//         }
//       );
//       io.to(socket.activeRoom).emit("messageRecieved", message);
//     });

//   });
// });

// let collection;

// server.listen(4000, async () => {
//   try {
//     await client.connect();
//     collection = client.db("chatApp").collection("chatApp");
//     console.log("Listening on port :%s...", server.address().port);
//   } catch (error) {
//     console.error(error);
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/chat", async (req, res) => {
//   try {
//     let result = await collection.findOne({ _id: req.query.group });
//     res.send(result);
//   } catch (e) {
//     res.status(500).send({ message: e.message });
//   }
// });
