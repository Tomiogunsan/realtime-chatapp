import React, { useState } from "react";


export default function InputForm({socket}: any) {
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
    e.preventDefault()
    socket.emit('createMessage',{
      from: 'User',
      text: val.message
    } )
   

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
        <button className="">Send</button>
      </form>
    </div>
  );
}
