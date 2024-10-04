import React from "react";
import { IconAvatar, IconMoreDown } from "../icons";

export default function Avatar(props) {
  const { imgSrc, menu, ...restProps } = props;
  return (
    <div className="avatar items-center cursor-pointer ">
      <div {...restProps}>
        {imgSrc ? (
          <img src={imgSrc} className="rounded-full" />
        ) : (
          <IconAvatar />
        )}
        {/* <img src={imgSrc ?  imgSrc : defaultAvatar } /> */}
      </div>

      {menu && (
        <IconMoreDown className="absolute -bottom-[1px] -right-[1px] w-4 rounded-full p-[2px] bg-gray-300 border-[3px] border-white" />
      )}
      {/* {menu && <DropdownArrow className="absolute -bottom-2 -right-1 w-4" />} */}
    </div>
  );
}
