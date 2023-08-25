import React from "react";
import Message from "../components/ChatMessage";
import SendMessage from "../components/SendMessage";
import Sidebar from "../components/Sidebar";

type Props = {
  socket: any;
  displayName: string;
  group: string;
}

export default function Chat({ socket, displayName, group }: Props) {
  return (
    <div className="w-full h-full">
      <Sidebar />
      {/* <h1 className="text-3xl font-bold underline">Hello world Chat</h1> */}
      <div className="w-[80%]  bg-[#f0f2f8] absolute right-0 top-0 h-full">
        <Message socket={socket} />
        <SendMessage socket={socket} displayName={displayName} group={group} />
      </div>
    </div>
  );
}
