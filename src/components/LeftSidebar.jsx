import React from "react";
import {
  FbIconFriends,
  FbIconGaming,
  FbIconGroups,
  FbIconMarketplace,
  FbIconMemories,
  FbIconSaved,
  FbIconVideo,
  IconMoreDown,
} from "../icons";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useUserStore from "../stores/userStore";

function LeftSidebar() {
  const user = useUserStore((state) => state.user);

  return (
    <div
      className="fixed top-14 h-[calc(100%-3.5rem)] w-[350px] 
      pt-3
      flex flex-col gap-2
      min-w-[220px] max-xl:w-[220px]
    overflow-hidden hover:overflow-auto
    scrollbar-custom"
    >
      <MenuItem
        icon={Avatar}
        text={user.firstName + " " + user.lastName}
        imgSrc={user.profileImage}
        className="w-[36px]"
      />
      <MenuItem icon={FbIconFriends} text="Friends" />
      <MenuItem icon={FbIconMemories} text="Memories" />
      <MenuItem icon={FbIconSaved} text="Saved" />
      <MenuItem icon={FbIconGroups} text="Groups" />
      <MenuItem icon={FbIconVideo} text="Video" />
      <MenuItem icon={FbIconMarketplace} text="Marketplace" />
      <MenuItem icon={FbIconGaming} text="Play games" />
      <MenuItem
        icon={IconMoreDown}
        text="See more"
        className="avatar p-[10px] w-[36px] h-[36px] rounded-full bg-gray-300"
      />
      <div className="divider"></div>
      {/*  */}
      {/*  */}
      <MenuItem icon={FbIconFriends} text="Friends" />
      <MenuItem icon={FbIconMemories} text="Memories" />
      <MenuItem icon={FbIconSaved} text="Saved" />
      <MenuItem icon={FbIconGroups} text="Groups" />
      <MenuItem icon={FbIconVideo} text="Video" />
      <MenuItem icon={FbIconMarketplace} text="Marketplace" />
      <MenuItem icon={FbIconGaming} text="Play games" />
    </div>
  );
}

export default LeftSidebar;
