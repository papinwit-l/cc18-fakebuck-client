import React from "react";

function MenuItem(props) {
  const { icon: Icon, text, ...restProps } = props;
  return (
    <button className="flex gap-4 btn bg-opacity-0 border-none shadow-none justify-start items-center hover:bg-opacity-20 rounded-sm">
      <Icon {...restProps} />
      {text}
    </button>
  );
}

export default MenuItem;
