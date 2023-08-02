import React, { useEffect, useState } from "react";

type Result = {
  from: string;
  text: string;
}[]
 export default function InputForm({ socket }: any) {
  const [message, setMessage] = useState<Result>([]);
  const [val, setVal] = useState({
    message: "",
  });
  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setVal((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  function hanldeSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    socket.emit("createMessage", {
      from: "User",
      text: val.message,
    });
  }

  useEffect(() => {
    socket.on("newMessage", (data: any) => {
      console.log(data);
     setMessage((state) => [
      ...state,
      {
        from: data.from,
        text: data.text
      }
     ])
    });
    return () => socket.off("newMessage")
  }, [socket]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          name="message"
          value={val.message}
          onChange={onInputChange}
        />
        <button className="">Send</button>
      </form>

      <div>
        {message.map((item, i) => {
          return(
            <p>{item.from}</p>
          )
        }) }
      </div>
    </div>
  );
}
