import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import Input from "../sharedComponent/input/Input";
import Button from "../sharedComponent/button/button";

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

        { displayName, group }
      );
    }
    navigate("/chat");
  }
  return (
    <div className="flex flex-col items-center justify-center  gap-4  bg-[#c1cbd8] h-[100vh] w-full py-28">
      <h1 className="font-bold text-[30px] text-[#055486] ">Join a Group</h1>
      <form className=" mx-auto bg-[#ffffff] w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16">
        <div className="flex flex-col items-center justify-center">
          <Input
            name="displayName"
            placeholder="Name"
            value={displayName}
            onChange={onChangeInput}
          />

          <select
            className="w-[350px] mt-4 border outline-[#6d67ff] px-2 py-[10px] mb-2 rounded-md shadow-sm"
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
          <Button
            type="submit"
            variant="primary"
            className="mt-4 w-[60%] rounded-md font-semibold"
            onClick={joinRoom}
          >
            Join
          </Button>
        </div>
      </form>
    </div>
  );
}
