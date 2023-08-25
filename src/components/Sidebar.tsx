import React from 'react'
import Button from '../sharedComponent/button/button';
import {FiLogOut} from "react-icons/fi"

export default function Sidebar() {
  return (
    <div className="w-[20%] h-full bg-[#ffffff] absolute left-0 top-0 ">
      <div className="block p-8 text-[24px]">names</div>
      <div className="">
        <Button
          variant="primary"
          className=" rounded-md  flex items-center justify-center bottom-[70px] absolute ml-[30px] gap-2 bg-slate-500"
        >
          <FiLogOut />
          Exist Group
        </Button>
      </div>
    </div>
  );
}
