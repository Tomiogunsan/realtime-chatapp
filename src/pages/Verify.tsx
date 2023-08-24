import React from 'react'
import { useParams } from 'react-router-dom';

export default function Verify() {
     const { userId, userToken } = useParams();
  return (
    <div>
        <h1>Verify</h1>
        <p>user id:{userId}</p>
        <p>user token: {userToken}</p>
    </div>
  )
}
