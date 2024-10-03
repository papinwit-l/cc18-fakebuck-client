import React from "react";
import Avatar from "./Avatar";
import { IconPostEmoji, IconPostPhoto, IconPostVideo } from "../icons";

function CreatePost() {
  return (
    <div className="card bg-white shadow">
      <div className="card-body">
        <div className="flex flex-row gap-2 items-center justify-center">
          <div>
            <Avatar className="w-11 h-11" />
          </div>
          <button className="btn rounded-full flex-1 justify-start bg-gray-200 hover:bg-gray-300 border-none">
            What's on your mind?
          </button>
        </div>
        <div className="divider my-0"></div>
        <div className="flex flex-row">
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <IconPostVideo />
            Live video
          </button>
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <IconPostPhoto />
            Photo/video
          </button>
          <button className="rounded-xl flex flex-row gap-2 justify-center flex-1 hover:bg-gray-100 py-2">
            <IconPostEmoji />
            Feeling/activity
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
