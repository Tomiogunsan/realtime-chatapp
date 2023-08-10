import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type Props = {
  socket: any;
  displayName: string;
  group: string;
  onChangeInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

const groupArray = ["Titan", "Amazons", "Viva", "Lipo"];

export default function Home({
  socket,
  displayName,
  group,
  onChangeInput,
}: Props) {
  const navigate = useNavigate();

  function joinRoom() {
    if (displayName !== "" && group !== "") {
      socket.emit(
        "join",

        { displayName, group,  }
      );
    }
    navigate("/chat");
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1>Join Room</h1>

      <input
        name="displayName"
        type="text"
        placeholder="Name"
        className="border"
        value={displayName}
        onChange={onChangeInput}
      />

      <select
        className="border"
        name="group"
        value={group}
        onChange={onChangeInput}
        defaultValue="none"
      >
        {/* <option value="select course" disabled>
            --Select a course--
          </option> */}

        {groupArray.map((list, i) => {
          return <option key={i}>{list}</option>;
        })}
      </select>
      <button
        type="submit"
        className="bg-pink-700 text-white px-4"
        onClick={joinRoom}
      >
        Join
      </button>
    </div>
  );
}
