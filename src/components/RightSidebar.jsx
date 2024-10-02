import React from "react";

function RightSidebar() {
  return (
    <div
      className="fixed top-14 right-0 h-[calc(100%-3.5rem)] w-[350px] overflow-auto
    flex flex-col gap-2 pt-4 px-2 max-xl:hidden"
    >
      <div className="btn btn-xl m-10">Menu Item</div>
    </div>
  );
}

export default RightSidebar;
