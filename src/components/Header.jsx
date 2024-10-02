import React from "react";
import { FacebookLogo } from "../icons";

function Header() {
  return (
    <header className="bg-orange-200 h-14 w-full fixed top-0 z-10">
      <div className="flex gap-2 items-center">
        <FacebookLogo />
      </div>
    </header>
  );
}

export default Header;
