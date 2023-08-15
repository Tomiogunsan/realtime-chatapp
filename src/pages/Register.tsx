import React from "react";
import Input from "../sharedComponent/input/Input";

export default function Register() {
  return (
    <div>
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
  );
}
