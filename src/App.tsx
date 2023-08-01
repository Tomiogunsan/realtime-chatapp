import {io } from "socket.io-client";
import "./App.css";
import InputForm from "./components/InputForm";

const socket = io('ws://localhost:4000') 
socket.on("connect", () => {
  console.log('Connected to server')
} )

socket.on('newEmail', () => {
  console.log("New email");
})

function App() {
  return <div className="App">

    <InputForm/>
  </div>;
}

export default App;
