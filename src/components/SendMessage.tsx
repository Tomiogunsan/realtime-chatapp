import React, { useState } from 'react'

export default function SendMessage() {
     const [val, setVal] = useState({
       message: "",
     });
     function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
       setVal((state) => ({
         ...state,
         [e.target.name]: e.target.value,
       }));
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
