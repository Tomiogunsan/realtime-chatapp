import React from 'react'
import Button from '../sharedComponent/button/button';
import { Link } from 'react-router-dom';
import Input from '../sharedComponent/input/Input';

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
         
          <div className=" flex justify-end w-full mr-[200px] pb-[2px]">
            <Link to="/forgot-password">
              <Button as="a" variant="link">
                Forgot Password?
              </Button>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
}
