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
     if (!navigator.geolocation) {
       return alert("Geolocation not supported by your browser.");
     }
     navigator.geolocation.getCurrentPosition(
       (position) => {
         console.log(position);
         socket.emit("createLocation", {
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
         });
       },
       () => {
         alert("Unable to fetch location.");
       }
     );
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

  function handleClick (){
   
  }

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
        <button className="ml-6 px-4 bg-slate-500 text-white">Send</button>
        <button className="px-4 bg-pink-600 text-white">Send location</button>
      </form>

      <div>
        {message.map((item, i) => {
          return (
            <div key={i}>
              <p>{item.from}</p>
              <p>{item.text}</p>
            </div>
          );
        }) }
      </div>
    </div>
  );
}
