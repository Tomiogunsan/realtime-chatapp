import React from "react";
import Button from "../sharedComponent/button/button";
import { Link } from "react-router-dom";
import Input from "../sharedComponent/input/Input";

export default function ForgotPassword() {
  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <div className=" mx-auto bg-[#ffffff] w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16">
        <div className="flex flex-col items-center justify-center">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name=""
            // value={}
            // onChange={}
          />

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
