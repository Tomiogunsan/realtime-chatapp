import React from 'react'
import Input from '../sharedComponent/input/Input';
import Button from '../sharedComponent/button/button';

export default function Reset() {
  return (
    <div className=" bg-[#c1cbd8] h-[100vh] w-full py-28">
      <form
        className=" mx-auto bg-[#ffffff] w-[550px] h-[450px] rounded-2xl shadow-2xl pt-16"
        // onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center">
          <Input
            label="New Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            // value={password}
            // onChange={onInputChange}
          />
          <Input
            label=" Confirm Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            // value={password}
            // onChange={onInputChange}
          />
          <Button
            variant="primary"
            type="submit"
            className=" w-[60%] rounded-md font-semibold mt-[10px]"
          >
            {" "}
            Reset Password
          </Button>
        </div>
      </form>
    </div>
  );
}
