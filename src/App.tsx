import { io } from "socket.io-client";
import "./App.css";
import InputForm from "./components/InputForm";
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const socket = io("ws://localhost:4000");
socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("newEmail", () => {
  console.log("New email");
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/chat" element={<InputForm socket={socket} />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
