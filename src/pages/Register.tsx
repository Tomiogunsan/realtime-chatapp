import React from "react";
import Input from "../sharedComponent/input/Input";
import Button from "../sharedComponent/button/button";

export default function Register() {
  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <div className=" mx-auto bg-white w-[550px] h-[500px] rounded-2xl shadow-2xl pt-16">
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
          <Button
            variant="primary"
            type="submit"
            className="mt-4 w-[60%] rounded-md font-semibold"
          >
            {" "}
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}
