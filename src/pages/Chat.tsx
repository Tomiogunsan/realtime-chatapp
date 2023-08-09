import React from "react";
import Message from "../components/ChatMessage";

export default function Chat({ socket }: any) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world Chat</h1>
      <Message socket={socket} />
    </div>
  );
}
