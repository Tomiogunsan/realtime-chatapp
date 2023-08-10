import React, { useState } from 'react'

type Props = {
  socket: any;
  displayName: string;
  group: string;
}

export default function SendMessage({socket, displayName, group}: Props) {
     const [val, setVal] = useState({
       message: "",
     });
     const{ message} = val
     function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
       setVal((state) => ({
         ...state,
         [e.target.name]: e.target.value,
       }));
     }

     function sendMessage(){
      if(message !== ''){
        const createdtime = Date.now()
        socket.emit('sendMessage', {
          message,
          displayName,
          createdtime,
          group

        })
      }
     }
  return (
    <div>
      <input
        type="text"
        name="message"
        value={val.message}
        onChange={onInputChange}
      />
      <button className="ml-6 px-4 bg-slate-500 text-white">Send</button>
      <button className="px-4 bg-pink-600 text-white">Send location</button>
    </div>
  );
}
