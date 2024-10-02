import React from "react";
import {
  FacebookLogo,
  IconAvatar,
  IconGroup,
  IconHome,
  IconNotify,
  IconShop,
  IconVideo,
} from "../icons";

function Header() {
  return (
    <header className="h-14 w-full fixed top-0 z-10 flex justify-between p-2 shadow-lg bg-white">
      <div className="flex gap-2 flex-1 items-center">
        <FacebookLogo className="h-[3rem]" />
        <label className="input input-bordered flex items-center gap-2 h-10 w-64 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex gap-2 flex-1 justify-center">
        <div className="flex justify-center items-center w-20 p-1 hover:bg-[#f2f2f2] rounded-md">
          <IconHome className="h-[2rem]" />
        </div>
        <div className="flex justify-center items-center w-20 p-1 hover:bg-[#f2f2f2] rounded-md">
          <IconVideo className="h-[1.7rem]" />
        </div>
        <div className="flex justify-center items-center w-20 p-1 hover:bg-[#f2f2f2] rounded-md">
          <IconShop className="h-[1.8rem]" />
        </div>
        <div className="flex justify-center items-center w-20 p-1 hover:bg-[#f2f2f2] rounded-md">
          <IconGroup className="h-[1.9rem]" />
        </div>
      </div>
      <div className="flex gap-2 flex-1 justify-end items-center">
        <div className="avatar">
          <div className="!flex justify-center items-center min-w-10 rounded-full bg-[#e4e6eb]">
            <IconNotify className="w-8" />
          </div>
        </div>
        {/* <div className="flex justify-center items-center w-[2rem] rounded-full">
          <IconAvatar />
        </div> */}
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
