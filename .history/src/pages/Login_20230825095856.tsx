import React, { useState } from "react";
import Input from "../sharedComponent/input/Input";
import Button from "../sharedComponent/button/button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = (useNavigate)
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  const { password, email } = form;
  const { REACT_APP_BASE_URL } = process.env;

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("Submited");
    try {
      const configuration = await axios.post(
        `${REACT_APP_BASE_URL}/login/`,
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
        <div className=" mx-auto bg-[#ffffff] w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16">
          <div className="flex flex-col items-center justify-center">
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
            <div className=" flex justify-end w-full mr-[200px] pb-[2px]">
              <Link to="/forgot-password">
                <Button as="a" variant="link">
                  Forgot Password?
                </Button>
              </Link>
            </div>

            <Button
              variant="primary"
              type="submit"
              className=" w-[60%] rounded-md font-semibold"
            >
              {" "}
              Login
            </Button>
            <div className="flex gap-[4px] items-center pt-4">
              <p className="text-[#9495a2] pt-[2px]">Not registered yet?</p>
              <Link to="/register">
                <Button as="a" variant="link">
                  Create an account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

