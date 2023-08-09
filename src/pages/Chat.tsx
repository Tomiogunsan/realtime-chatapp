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

 export default function Chat({ socket }: any) {
  
 


 

  

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world Chat</h1>
      

      
    </div>
  );
}
