import React from "react";
import { IconAvatar } from "../icons";

function LeftSidebar() {
  return (
    <div
      className="fixed top-14 h-[calc(100%-3.5rem)] w-[350px] flex flex-col gap-2
      min-w-[220px] max-xl:w-[220px]
    overflow-auto"
    >
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <div className="divider"></div>
    </div>
  );
}

export default LeftSidebar;
