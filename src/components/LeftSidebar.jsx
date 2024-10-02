import React from "react";
import {
  IconAvatar,
  IconFriend,
  IconGroupActive,
  IconHistory,
  IconSaved,
} from "../icons";

function LeftSidebar() {
  return (
    <div
      className="fixed top-14 h-[calc(100%-3.5rem)] w-[350px] 
      pt-3
      flex flex-col gap-2
      min-w-[220px] max-xl:w-[220px]
    overflow-hidden hover:overflow-auto
    scrollbar-custom"
    >
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconFriend className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-333px] bg-no-repeat"></i>
        Friends
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconHistory className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-481px] bg-no-repeat"></i>
        Memories
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconSaved className="w-7" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-185px] bg-no-repeat"></i>
        Saved
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconGroupActive className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-37px] bg-no-repeat"></i>
        Groups
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-555px] bg-no-repeat"></i>
        Video
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-444px] bg-no-repeat"></i>
        Marketplace
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-74px] bg-no-repeat"></i>
        Play games
      </button>
      <div className="divider"></div>
      {/*  */}
      {/*  */}
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <IconAvatar className="w-8" />
        Andy Codecamp
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconFriend className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-333px] bg-no-repeat"></i>
        Friends
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconHistory className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-481px] bg-no-repeat"></i>
        Memories
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconSaved className="w-7" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-185px] bg-no-repeat"></i>
        Saved
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        {/* <IconGroupActive className="w-8" /> */}
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-37px] bg-no-repeat"></i>
        Groups
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-555px] bg-no-repeat"></i>
        Video
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-444px] bg-no-repeat"></i>
        Marketplace
      </button>
      <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
        <i className="bg-[url('./assets/fb-icon-menu.png')] w-[36px] h-[36px] bg-auto bg-[0_-74px] bg-no-repeat"></i>
        Play games
      </button>
    </div>
  );
}

export default LeftSidebar;
