import React from "react";
import { SearchIcon } from "../icons";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

function RightSidebar() {
  return (
    <div
      className="fixed top-14 right-0 h-[calc(100%-3.5rem)] w-[350px] overflow-auto
    flex flex-col gap-2 pt-4 px-2 max-xl:hidden"
    >
      <div className="flex justify-between text-gray-500">
        <span>Contact</span>
        <div className="flex gap-2">
          <SearchIcon className="w-5" />
          ...
        </div>
      </div>
      <MenuItem
        icon={Avatar}
        text="Bobby Codecamp"
        imgSrc="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        className="w-[36px]"
      />
    </div>
  );
}

export default RightSidebar;
