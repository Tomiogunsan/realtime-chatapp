import React, { useState } from "react";


const course = ["java", "javascript", "node"];

export default function Home({socket}: any) {
   
  const [data, setData] = useState({
    displayName: "",
    courseOption: "java",
  });

  const {displayName, courseOption} = data

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) {
    setData((state) => ({
        ...state,
        [e.target.name]: e.target.value
    }))
   
   
  }

  function onSubmitHandler(e: React.FormEvent){
    e.preventDefault()
    socket.emit('join', {
         displayName,
      courseOption
    })
  }
 
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1>Join Room</h1>
      <form onSubmit={() => onSubmitHandler}>
        <input
          name="displayName"
          type="text"
          placeholder="Display name"
          className="border"
          value={displayName}
          onChange={onChangeInput}
        />

        <select
          className="border"
          name="courseOption"
          value={courseOption}
          onChange={onChangeInput}
        >
          <option>Select course</option>

          {course.map((list, i) => {
            return <option key={i}>{list}</option>;
          })}
        </select>
        <button type="submit" className="bg-pink-700 text-white px-4">
          Join
        </button>
      </form>
    </div>
  );
}
