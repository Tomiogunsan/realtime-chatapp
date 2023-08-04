import React, { useState } from "react";

const course = ["java", "javascript", "node"];

export default function Home() {
  const [data, setData] = useState({
    displayName: "",
    courseOption: "",
  });
  function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) {
    setData((state) => ({
        ...state,
        [e.target.name]: e.target.value
    }))
   console.log(e.target.value);
  }
 
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1>Join Room</h1>
      <input
        name="displayName"
        type="text"
        placeholder="Display name"
        className="border"
        value={data.displayName}
        onChange={onChangeInput}
      />

      <select
        className="border"
        name="course"
        value={data.courseOption}
        onChange={onChangeInput}
      >
        <option>Select Room</option>
        {course.map((list, i) => {
          return <option key={i}>{list}</option>;
        })}
      </select>

      <button type="submit" className="bg-pink-700 text-white px-4">
        Join
      </button>
    </div>
  );
}
