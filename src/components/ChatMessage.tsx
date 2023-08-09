import React, { useEffect, useState } from 'react'


type Message = {
  message: string;
  from: string;
  time: string;
}[]

export default function ChatMessage({socket}: any) {
  const [message, setMessage] = useState<Message>([])

  useEffect(() => {
    socket.on("receiveMessage", (data: any) => {
      console.log(data);
      setMessage((state) => [
        ...state,
        {
          message: data.message,
          from: data.from,
          time: data.createdtime,
        },
      ]);
    });
     return () => socket.off("receiveMessage");
  }, [socket])

  //  function formatDateFromTimestamp(timestamp: string ) {
  //    const date = new Date(timestamp);
  //    return date.toLocaleString();
  //  }

  return (
    <div>
      <p>hiii</p>
      {message.map((msg, i) => {
        return(
          <div key={i}>
            <p>{msg.from}</p>
            <p>{msg.message}</p>
            <p>{msg.time}</p>
          </div>
        )
      })}
    </div>
  )
}
