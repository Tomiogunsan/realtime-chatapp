import React, { useState } from "react";
import { useLocation, useSearchParams} from "react-router-dom";

const course = ["java", "javascript", "node"];

export default function Home() {
   
  const [data, setData] = useState({
    displayName: "",
    courseOption: "java",
  });

  function onChangeInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) {
    setData((state) => ({
        ...state,
        [e.target.name]: e.target.value
    }))
   
   
  }

  function onSubmitHandler(e: React.FormEvent){
    e.preventDefault()
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
          value={data.displayName}
          onChange={onChangeInput}
        />

        <select
          className="border"
          name="courseOption"
          value={data.courseOption}
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
