import React from "react";
import Input from "../sharedComponent/input/Input";

export default function Register() {
  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <div className=" mx-auto bg-white w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16">
        <div className="flex flex-col items-center justify-center">
          <Input
            label="Firstname"
            placeholder="Enter your firstname"
            type="input"
            name=""
            // value={}
            // onChange={}
          />
          <Input
            label="Lastname"
            placeholder="Enter your lastname"
            type="input"
            name=""
            // value={}
            // onChange={}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name=""
            // value={}
            // onChange={}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name=""
            // value={}
            // onChange={}
          />
        </div>
      </div>
    </div>
  );
}
