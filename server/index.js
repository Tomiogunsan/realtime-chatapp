const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()
const { Server } = require("socket.io");

app.use(cors())
const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
    console.log("new user connected");
    socket.emit('newEmail')
    socket.on("createMessage" , (message) => {
console.log('first', message)
    }

    )
    socket.emit('newMessage', {
     from: 'User',
      text: 'welcome'
    })
})

app.get('/', (req,res) => {
    res.send('Hello world')
})
server.listen(4000, () => 
console.log("Server is running on port 3000")
);