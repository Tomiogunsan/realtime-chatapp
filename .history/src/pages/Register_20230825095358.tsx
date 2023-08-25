import React, { FormEventHandler, useState } from "react";
import Input from "../sharedComponent/input/Input";
import Button from "../sharedComponent/button/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import * as yup from "yup";
import { string } from "yup";

export default function Register() {
  const { REACT_APP_BASE_URL } = process.env;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    password: false,
    email: false,
  });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const { firstName, lastName, password, email } = form;

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    console.log("Submited");
    try {
      const configuration = await axios.post(
        `${REACT_APP_BASE_URL}/register/`,
        form
      );
      console.log(configuration);
      navigate("/");
    } catch (error: any) {
      toast.error("User Already Exist. Please Login");
    }
  }

  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <form
        className=" mx-auto bg-[#ffffff] w-[550px] h-[550px] rounded-2xl shadow-2xl pt-16"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center">
          <Input
            label="Firstname"
            placeholder="Enter your firstname"
            type="input"
            name="firstName"
            value={firstName}
            onChange={onInputChange}
          />
          <Input
            label="Lastname"
            placeholder="Enter your lastname"
            type="input"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <Button
            variant="primary"
            type="submit"
            className="mt-4 w-[60%] rounded-md font-semibold"
          >
            {" "}
            Create Account
          </Button>
          <div className="flex gap-[4px] items-center pt-4">
            <p className="text-[#9495a2] pt-[2px]">Already have an account?</p>
            <Link to="/login">
              <Button as="a" variant="link">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
