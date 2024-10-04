import React, { useEffect } from "react";
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

import timeAndDate from "../utils/timeAndDate";

function PostItem(props) {
  const { posts } = props;
  const { user } = posts;
  // console.log(posts);

  // const fullDateAndTime = new Date(posts.createdAt).toString();
  // const dateAndTime = fullDateAndTime.split(" GMT")[0];
  // const tIndex = dateAndTime.lastIndexOf(" ");
  // const fullDate = dateAndTime.slice(0, tIndex);
  // const fullTime = dateAndTime.slice(tIndex + 1, dateAndTime.length);
  // const time = fullTime.split(":")[0] + ":" + fullTime.split(":")[1];
  // const date =
  //   fullDate.split(" ")[1] +
  //   " " +
  //   fullDate.split(" ")[2] +
  //   " " +
  //   fullDate.split(" ")[3];
  const showDateTime = timeAndDate(posts.createdAt);
  // console.log(date);
  // console.log(time);
  return (
    <div className="card bg-white shadow">
      <div className="card-body">
        <div className="flex flex-row gap-2 items-center justify-between">
          <div className="flex flex-row gap-2">
            <div>
              <Avatar className="w-11 h-11" imgSrc={user.profileImage} />
            </div>
            <div className="flex flex-col">
              <p className="font-bold">{`${user.firstName} ${user.lastName}`}</p>
              <p className=" text-xs font-bold opacity-50">{showDateTime}</p>
            </div>
          </div>
          <div>
            <IconMoreMenu className="avatar w-[36px] p-1 rounded-full hover:bg-gray-100" />
            <IconCloseMenu className="avatar w-[36px] p-2 rounded-full hover:bg-gray-100" />
          </div>
        </div>
        <p>{posts.message}</p>
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
