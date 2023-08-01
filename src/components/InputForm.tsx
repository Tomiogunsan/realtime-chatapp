import React from 'react'

export default function InputForm() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <form>
        <input type="text" />
        <button className="bg-blue-600">Send</button>
      </form>
    </div>
  );
}
