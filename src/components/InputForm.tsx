import React, { useEffect, useState } from "react";

type Result = {
  from: string;
  text: string;
}[]

type Location = {
  latitude: number;
  longitude: number;
  from:string;
  url: string;
}[]

 export default function InputForm({ socket }: any) {
  const [message, setMessage] = useState<Result>([]);
  const [location, setLocation] = useState<Location>([])
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
      createAt: new Date()
    });
     if (!navigator.geolocation) {
       return alert("Geolocation not supported by your browser.");
     }
     navigator.geolocation.getCurrentPosition(
       (position) => {
       
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
     
     setMessage((state) => [
      ...state,
      {
        from: data.from,
        text: data.text
      }
     ])
    });
    socket.on("newLocationMessage", (data: any) => {
      setLocation((state) => [
        ...state,
        {
          from: data.from,
          latitude: data.latitude,
          longitude: data.longitude,
          url: data.url
        }
      ])
    } );
    return () => socket.off("newMessage", 'newLocationMessage')
    
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
      <div>
        {location.map((location, i) => {
          return(
            <div key={i}>
              <p>{location.from}</p>
              <a href={location?.url}>My current location</a>
            </div>
          )
        })}
      </div>
    </div>
  );
}
