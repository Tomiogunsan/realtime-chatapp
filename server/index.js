const express = require("express");
const http = require("http");
const cors = require("cors");
const app = express();
const { Server } = require("socket.io");
const { MongoClient } = require("mongodb")
const { generateLocationMessage } = require("./utils/message");
const moment = require("moment");

const client = new MongoClient(
  "mongodb+srv://tomiafolayan:Eniolorunfe@cluster0.5ztnlcc.mongodb.net/?retryWrites=true&w=majority"
);

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.emit("newEmail");
  socket.on("createMessage", (message) => {
    console.log("first", message);
  });

  socket.on("join", (data) => {
    console.log(data)
   const {displayName, courseOption} = data;
    socket.join(courseOption)
    

    // socket.broadcast.emit(
    //   "newMessage",
    //   { from: "Admin", text:"New user joined"}
    // );

    // to emit to single person in a room
    // io.emit -> io.to('java').emit
    //broadcast, meaning that we want to send an event to everybody in a room except for the current user
   //socket.broadcast.emit -> socket.broadcast.to('java')
  
  })
 
  
});



app.get("/", (req, res) => {
  res.send("Hello world");
});
server.listen(4000, async () =>{
  try {
    await client.connect()
     const collection = client.db("chatApp").collection("chatApp");
             console.log("Listening on port :%s...", server.address().port);
  } catch (error) {
    console.error(error);
     
  }
});
