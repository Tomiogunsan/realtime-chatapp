import React, { useState } from "react";
import Button from "../sharedComponent/button/button";
import {MdOutlineAttachment} from "react-icons/md";

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
    <div className="absolute bottom-[4px] w-full bg-[#dae7ef]">
      <div className="flex w-[80%] rounded-lg  ml-[80px] ">
        <input
          type="text"
          placeholder="Type a Message..."
          name="message"
          value={msg}
          onChange={onInputChange}
          className="flex-grow py-4 my-2  rounded-lg"
        />
        
          <p className="absolute right-[370px] text-[28px] mt-[20px] text-slate-500 font-bold">
            <MdOutlineAttachment/>
          </p>
       

        <Button
          variant="primary"
          className="ml-6 w-[150px] px-4 rounded-md bg-slate-500 text-white absolute right-[200px] mt-[12px]"
          onClick={sendMessage}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
