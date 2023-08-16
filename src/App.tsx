import { io } from "socket.io-client";
import "./App.css";
import Chat from "./pages/Chat";
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

const socket = io("ws://localhost:4000");
socket.on("connect", () => {
  console.log("Connected to server");
});

socket.on("newEmail", () => {
  console.log("New email");
});

function App() {
  const [data, setData] = useState({
    displayName: "",
    group: "",
  });
   const { displayName, group } = data;

   function onChangeInput(
     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   ) {
     setData((state) => ({
       ...state,
       [e.target.name]: e.target.value,
     }));
   }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                socket={socket}
                displayName={displayName}
                group={group}
                onChangeInput={onChangeInput}
              />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/chat"
            element={
              <Chat socket={socket} displayName={displayName} group={group} />
            }
          />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
