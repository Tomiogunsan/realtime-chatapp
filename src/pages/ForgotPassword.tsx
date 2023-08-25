import React, { useState } from "react";
import Button from "../sharedComponent/button/button";

import Input from "../sharedComponent/input/Input";
import axios from "axios";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
   const { REACT_APP_BASE_URL } = process.env;
 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
try {
  const configuration = await axios.post(
    `${REACT_APP_BASE_URL}/requestResetPassword`, email
  );
  console.log(configuration)
} catch (error) {
  console.log(error)
  toast.error("User does not exist")
}
  }

  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <form className=" mx-auto bg-[#ffffff] w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit" variant="primary">
            Send Reset Code
          </Button>
        </div>
      </form>
    </div>
  );
}
