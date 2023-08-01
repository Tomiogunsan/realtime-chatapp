import {io } from "socket.io-client";
import "./App.css";

const socket = io('ws://localhost:4000') 
socket.on("connect", () => {
  console.log('Connected to server')
} )

function App() {
  return <div className="App"></div>;
}

export default App;
