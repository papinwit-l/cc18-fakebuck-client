import React from "react";
import Avatar from "./Avatar";
import {
  FbIconUtilComment,
  FbIconUtilLike,
  FbIconUtilShare,
  IconCloseMenu,
  IconMoreMenu,
  IconPostEmoji,
  IconPostPhoto,
  IconPostVideo,
} from "../icons";

function PostItem() {
  return (
    <div className="card bg-white shadow">
      <div className="card-body">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2">
            <div>
              <Avatar className="w-11 h-11" />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">Andy Codecamp</p>
              <p className=" text-xs font-bold opacity-50"> 59 min.</p>
            </div>
          </div>
          <div>
            <IconMoreMenu className="avatar w-[36px] p-1 rounded-full hover:bg-gray-100" />
            <IconCloseMenu className="avatar w-[36px] p-2 rounded-full hover:bg-gray-100" />
          </div>
        </div>
        <div className="divider my-0"></div>
        <div className="flex flex-row">
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <FbIconUtilLike />
            Like
          </button>
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <FbIconUtilComment />
            Comment
          </button>
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <FbIconUtilShare />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
