import React from "react";
import { IconAvatar } from "../icons";

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

      {/* { menu && 
					<DropdownArrow className="absolute -bottom-2 -right-1 w-4"/>
			} */}
    </div>
  );
}
