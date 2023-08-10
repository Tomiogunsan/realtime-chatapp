import React, { useState } from "react";

type Props = {
  socket: any;
  displayName: string;
  group: string;
};

export default function SendMessage({ socket, displayName, group }: Props) {
  const [msg, setMsg] = useState("");

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMsg(e.target.value);
  }

  function sendMessage() {
    if (msg !== "") {
      const createdtime = Date.now();
      socket.emit("sendMessage", {
        msg,
        displayName,
        createdtime,
        group,
      });
      setMsg("");
    }
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Type a Message..."
        name="message"
        value={msg}
        onChange={onInputChange}
      />
      <button
        className="ml-6 px-4 bg-slate-500 text-white"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
