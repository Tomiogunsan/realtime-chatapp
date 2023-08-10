import React from "react";
import Message from "../components/ChatMessage";
import SendMessage from "../components/SendMessage";

type Props = {
  socket: any;
  displayName: string;
  group: string;
}

export default function Chat({ socket, displayName, group }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world Chat</h1>
      <Message socket={socket} />
      <SendMessage socket={socket} displayName={displayName} group={group}/>
    </div>
  );
}
